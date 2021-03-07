import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  public getWeather(city): Observable<any> {
      return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather',
      {params: {q: city, units: "metric", appid: "a1c26ef8900a9f2c9b44deabe1e89469" }
      });
  }
}
