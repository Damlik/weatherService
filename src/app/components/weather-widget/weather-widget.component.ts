import { Component, OnInit } from '@angular/core';
import cityList from "../../../assets/cityList.json";
import countryList from "../../../assets/countryList.json";
import { cityModel } from "../../models/city.model";
import { ActivatedRoute, Params } from "@angular/router";
import { WeatherService } from "../../services/weather.service";
import { Subject } from "rxjs";

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit {
  public currentCountryCityList: Subject<cityModel> = new Subject();
  public currentCountryCode: string;
  public currentCountry: string;
  public cityWeatherList: Array<any>;

  constructor(private router: ActivatedRoute,
              private weatherService: WeatherService) { }

  private getCurrentCountryCode(): string {
    for(let country of countryList) {
      if(country.name === this.currentCountry) {
        return country.code;
      }
    }
  }

  private getCountryCityList(): void {
    for (let city of cityList) {
      if(city.country === this.currentCountryCode) {
        this.currentCountryCityList.next(city);
      }
    }
  }

  ngOnInit(): void {
    this.currentCountryCityList.subscribe((data) => {
      let subscribe = this.weatherService.getWeather(data.name).subscribe((data) => {
        this.cityWeatherList.push(data);
        subscribe.unsubscribe();
      });
    });

    this.router.params.subscribe(( params:Params ) => {
      this.cityWeatherList = [];
      this.currentCountry = params.country;
      this.currentCountryCode = this.getCurrentCountryCode();
      this.getCountryCityList();
    });
  }
}
