import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>{{ name }}!</h1>
    <dashboard-tile1></dashboard-tile1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string = "Angular 11 Web Component";
}
