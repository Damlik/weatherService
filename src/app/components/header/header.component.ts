import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  public menu: Array<{value: string, name: string}> = [
    {
      value: "/russia",
      name: "Russia"
    },
    {
      value: "/usa",
      name: "USA"
    },
    {
      value: "/france",
      name: "France"
    },
    {
      value: "/deutschland",
      name: "Deutschland"
    }
  ];

  navigateTo(event) {
    this.router.navigate([event.target.value]);
  }

}
