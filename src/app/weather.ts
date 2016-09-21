import { Component } from "@angular/core";

@Component({
  selector: "weather",
  template: `
    <h2>Weather Component</h2>
    <p>This is the wheater component which can be found in src/app/wheater.ts</p>
  `,
})
export class WeatherComponent {
  constructor() {
    console.log("In Wheater constructor");
  }
}
