import { Component } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { FlightInput } from 'src/app/interfaces/flightInput';
import { Flight } from 'src/app/interfaces/flight';
import { Transport } from 'src/app/interfaces/transport';
import { Journey } from 'src/app/interfaces/journey';

type Graph = any[];

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css'],
})
export class FlightComponent {
  flights: FlightInput[] = [];
  origin: string = '';
  destination: string = '';
  private graph: Graph = [];
  journey: Journey | any = null;
  maxStops: number = 3;
  maxCost: number = 0;
  eur: boolean = false;
  cad: boolean = false;
  data: { [key: string]: number } = {};

  constructor(private apiService: APIService) {}
  showMessage: boolean = false;
  ngOnInit(): void {
    this.apiService.get('2').subscribe((data: FlightInput[]) => {
      this.flights = data;
      this.graph = this.generateGraph();
    });
    this.apiService.getCurrency().subscribe((data: any) => {
      this.data = data.data;
    });
  }

  generateGraph() {
    let graph: any[] = [];
    this.flights.forEach((flight) => {
      let transport: Transport = {
        flightCarrier: flight.flightCarrier,
        flightNumber: flight.flightNumber,
      };
      graph.push([
        flight.departureStation,
        [flight.arrivalStation, flight.price, transport],
      ]);
    });
    return graph;
  }

  onInputChange(event: any): string {
    if (/[0-9]/.test(event.target.value)) {
      return '';
    }
    return event.target.value.replace(/[^a-zA-Z]/g, '');
  }

  onchangeOrigin(event: Event) {
    this.origin = this.onInputChange(event).toUpperCase();
    this.validate();
  }

  onchangeDestination(event: Event) {
    this.destination = this.onInputChange(event).toUpperCase();
    this.validate();
  }

  onChangeStop(event: Event) {
    this.maxStops = parseInt((event.target as HTMLInputElement).value);
  }

  validate() {
    if (this.origin.length > 0 || this.destination.length > 0) {
      if (this.origin === this.destination) {
        this.destination = '';
      }
    }
  }
  searchFlights() {
    this.maxCost = 0;
    const flightsJourney = this.route(
      this.graph,
      this.origin,
      this.destination,
      this.maxStops
    );
    if (flightsJourney !== null) {
      this.journey = {
        origin: this.origin,
        destination: this.destination,
        price: this.maxCost,
        flights: flightsJourney,
      };
    }
    console.log(flightsJourney, this.journey);
    this.changeShowMessage();
  }

  changeShowMessage() {
    this.showMessage = !this.showMessage;
  }

  route(
    graph: Graph,
    currentCity: string,
    destination: string,
    maxStops: number = 3,
    visitedCities: Set<string> = new Set(),
    data: any | null = null
  ): Flight[] | null {
    visitedCities.add(currentCity);
    if (maxStops === 0) return null;
    if (currentCity === destination) {
      return [];
    }

    for (let nextCity of graph.filter(
      (struture) => struture[0] === currentCity
    )) {
      if (!visitedCities.has(nextCity[1][0])) {
        const pathFromNextCity = this.route(
          graph,
          nextCity[1][0],
          destination,
          maxStops--,
          visitedCities,
          nextCity
        );

        if (pathFromNextCity !== null) {
          this.maxCost += nextCity[1][1];
          let flight: Flight = {
            transport: nextCity[1][2],
            origin: currentCity,
            destination: nextCity[1][0],
            price: nextCity[1][1],
          };
          return [flight, ...pathFromNextCity];
        }
      }
    }

    return null;
  }
}
