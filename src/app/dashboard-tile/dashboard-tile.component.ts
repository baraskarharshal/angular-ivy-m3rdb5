import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ChartType, ChartOptions } from "chart.js";
import {
  SingleDataSet,
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip
} from "ng2-charts";

@Component({
  selector: "app-dashboard-tile",
  templateUrl: "./dashboard-tile.component.html",
  styleUrls: ["./dashboard-tile.component.css"]
})
export class DashboardTileComponent implements OnInit {
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true
  };
  public pieChartLabels: Label[] = [
    ["Download", "Sales"],
    ["In", "Store", "Sales"],
    "Mail Sales"
  ];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = "pie";
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {}
}
