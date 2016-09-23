import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { routing } from "./app.routes";
import { AppComponent } from "./app/app";
import { HomeComponent } from "./app/home";
import { AboutComponent } from "./app/about";

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
