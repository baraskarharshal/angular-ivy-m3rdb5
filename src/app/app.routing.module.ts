import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardTileComponent } from "./dashboard-tile/dashboard-tile.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HelloComponent } from "./hello.component";

const routes: Routes = [
  { path: "", component: HelloComponent },
  { path: "dashboard", component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
