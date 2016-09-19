import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { Home } from "./components/home";
import { About } from "./components/about";

const routes: Routes = [
  { path: "",      component: Home},
  { path: "about", component: About}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
