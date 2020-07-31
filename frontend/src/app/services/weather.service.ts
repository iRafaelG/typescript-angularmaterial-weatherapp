import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// import interfaces
import { IWeather } from '../interfaces/Weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  OWAPIURI = '';

  constructor( private httpClient: HttpClient ) {
    this.OWAPIURI = `your backend url`;
   }

  getWeather(cityName: string, countryName: string): Observable<IWeather> {
    return this.httpClient.get<IWeather>(`${this.OWAPIURI}/weather?city=${cityName}&country=${countryName}`);
  }
}
