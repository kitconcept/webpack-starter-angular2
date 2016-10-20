import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { routing } from "./app.routes";
import { AppComponent } from "./app/app";
import { HomeComponent } from "./app/home";
import { AboutComponent } from "./app/about";
import { PageComponent } from "./app/page.component";
import { NavbarComponent }  from "./app/navbar";
import "material-design-lite/material.css";
import "material-design-lite/material.js";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageComponent,
    NavbarComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
