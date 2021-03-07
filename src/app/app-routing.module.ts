import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherWidgetComponent } from "./components/weather-widget/weather-widget.component";

const routes: Routes = [
  { path: ':country', component: WeatherWidgetComponent },
  { path: '',   redirectTo: '/russia', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
