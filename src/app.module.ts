import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { routing } from "./app.routes";
import { MyApp } from "./app/app";
import { Home } from "./app/home";
import { About } from "./app/about";

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    MyApp,
    Home,
    About
  ],
  bootstrap: [ MyApp ]
})

export class AppModule { }
