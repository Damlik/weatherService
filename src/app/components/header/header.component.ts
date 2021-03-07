import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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

  ngOnInit(): void {
  }

  navigateTo(event) {
    this.router.navigate([event.target.value]);
  }

}
