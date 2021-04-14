import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { DashboardTileComponent } from "./dashboard-tile/dashboard-tile.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AppRoutingModule } from "./app.routing.module";

@NgModule({
  imports: [BrowserModule, FormsModule, ChartsModule, AppRoutingModule],
  exports: [DashboardTileComponent],
  declarations: [
    AppComponent,
    HelloComponent,
    DashboardTileComponent,
    DashboardComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const elm = createCustomElement(DashboardTileComponent, { injector });

    customElements.define("dashboard-tile1", elm);
  }
}
