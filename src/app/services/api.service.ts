import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlightInput } from '../interfaces/flightInput';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  private apiUrl: string;
  private currencyUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
    this.currencyUrl = environment.currencyUrl;
  }

  get(endpoint: string): Observable<FlightInput[]> {
    return this.http.get<FlightInput[]>(`${this.apiUrl}${endpoint}`);
  }

  getCurrency(): Observable<JSON> {
    return this.http.get<JSON>(this.currencyUrl);
  }
}
