import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./app/home";
import { AboutComponent } from "./app/about";
import { PageComponent } from "./app/page.component";

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "about", component: AboutComponent},
  { path: ":path", component: PageComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
