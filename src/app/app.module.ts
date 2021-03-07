import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from "@angular/common/http";
import { WindMsPipe } from "./pipes/windMs.pipe";

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent,
    HeaderComponent,
    WindMsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
