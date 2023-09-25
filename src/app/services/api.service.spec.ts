import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { APIService } from './api.service';
import { FlightInput } from '../interfaces/flightInput';
import { environment } from 'src/environments/environment.development';

describe('APIService', () => {
  let service: APIService;
  let httpTestingController: HttpTestingController;
  let apiUrl: string;
  let currencyUrl: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [APIService],
    });
    apiUrl = environment.apiUrl;
    currencyUrl = environment.currencyUrl;
    service = TestBed.inject(APIService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve data using GET', () => {
    const mockData: FlightInput[] = [
      {
        departureStation: 'MZL',
        arrivalStation: 'MDE',
        flightCarrier: 'CO',
        flightNumber: '8001',
        price: 200,
      },
      {
        departureStation: 'MZL',
        arrivalStation: 'CTG',
        flightCarrier: 'CO',
        flightNumber: '8002',
        price: 200,
      },
      {
        departureStation: 'PEI',
        arrivalStation: 'BOG',
        flightCarrier: 'CO',
        flightNumber: '8003',
        price: 200,
      },
      {
        departureStation: 'MDE',
        arrivalStation: 'BCN',
        flightCarrier: 'CO',
        flightNumber: '8004',
        price: 500,
      },
      {
        departureStation: 'CTG',
        arrivalStation: 'CAN',
        flightCarrier: 'CO',
        flightNumber: '8005',
        price: 300,
      },
      {
        departureStation: 'BOG',
        arrivalStation: 'MAD',
        flightCarrier: 'CO',
        flightNumber: '8006',
        price: 500,
      },
      {
        departureStation: 'BOG',
        arrivalStation: 'MEX',
        flightCarrier: 'CO',
        flightNumber: '8007',
        price: 300,
      },
      {
        departureStation: 'MZL',
        arrivalStation: 'PEI',
        flightCarrier: 'CO',
        flightNumber: '8008',
        price: 200,
      },
      {
        departureStation: 'MDE',
        arrivalStation: 'CTG',
        flightCarrier: 'CO',
        flightNumber: '8009',
        price: 200,
      },
      {
        departureStation: 'BOG',
        arrivalStation: 'CTG',
        flightCarrier: 'CO',
        flightNumber: '8010',
        price: 200,
      },
      {
        departureStation: 'MDE',
        arrivalStation: 'MZL',
        flightCarrier: 'CO',
        flightNumber: '9001',
        price: 200,
      },
      {
        departureStation: 'CTG',
        arrivalStation: 'MZL',
        flightCarrier: 'CO',
        flightNumber: '9002',
        price: 200,
      },
      {
        departureStation: 'BOG',
        arrivalStation: 'PEI',
        flightCarrier: 'CO',
        flightNumber: '9003',
        price: 200,
      },
      {
        departureStation: 'BCN',
        arrivalStation: 'MDE',
        flightCarrier: 'ES',
        flightNumber: '9004',
        price: 500,
      },
      {
        departureStation: 'CAN',
        arrivalStation: 'CTG',
        flightCarrier: 'MX',
        flightNumber: '9005',
        price: 300,
      },
      {
        departureStation: 'MAD',
        arrivalStation: 'BOG',
        flightCarrier: 'ES',
        flightNumber: '9006',
        price: 500,
      },
      {
        departureStation: 'MEX',
        arrivalStation: 'BOG',
        flightCarrier: 'MX',
        flightNumber: '9007',
        price: 300,
      },
      {
        departureStation: 'PEI',
        arrivalStation: 'MZL',
        flightCarrier: 'CO',
        flightNumber: '9008',
        price: 200,
      },
      {
        departureStation: 'CTG',
        arrivalStation: 'MDE',
        flightCarrier: 'CO',
        flightNumber: '9009',
        price: 200,
      },
      {
        departureStation: 'CTG',
        arrivalStation: 'BOG',
        flightCarrier: 'CO',
        flightNumber: '9010',
        price: 200,
      },
    ];

    service.get('2').subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = httpTestingController.expectOne(`${apiUrl}/endpoint`);
    expect(req.request.method).toBe('GET');

    req.flush(mockData);
  });

  it('should retrieve currency data using GET', () => {
    const mockCurrencyData: any = {
      data: {
        CAD: 1.348490165,
        EUR: 0.9392401028,
      },
    };

    service.getCurrency().subscribe((currencyData) => {
      expect(currencyData).toEqual(mockCurrencyData);
    });

    const req = httpTestingController.expectOne(currencyUrl);
    expect(req.request.method).toBe('GET');

    req.flush(mockCurrencyData); // Simula la respuesta del servidor
  });
});
