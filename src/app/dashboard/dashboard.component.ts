import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  addChart() {
    const elm = document.createElement("dashboard-tile1");

    const container = document.getElementById("content");
    container.appendChild(elm);
  }
}
