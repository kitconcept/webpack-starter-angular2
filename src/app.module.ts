import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { routing } from "./app.routes";
import { MyApp } from "./components/app";
import { Home } from "./components/home";
import { About } from "./components/about";

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
