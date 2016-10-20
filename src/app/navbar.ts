import { Component, OnInit } from "@angular/core";
import { BackendService } from "./backend.service";

@Component({
  selector: "plone-navbar",
  template: `
    <!-- Always shows a header, even in smaller screens. -->
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <!-- Title -->
          <span class="mdl-layout-title">plone.restapi</span>
          <!-- Add spacer, to align navigation to the right -->
          <div class="mdl-layout-spacer"></div>
          <!-- Navigation. We hide it in small screens. -->
          <nav class="mdl-navigation mdl-layout--large-screen-only" *ngFor="let item of navbarItems">
            <a class="mdl-navigation__link"
               [routerLink]="item.url.replace('http://localhost:8080/Plone', '')"
               [routerLinkActive]="['active']">
              {{item.title}}
            </a>
          </nav>
        </div>
      </header>
      <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">Title</span>
        <nav class="mdl-navigation" *ngFor="let item of navbarItems">
          <a class="mdl-navigation__link"
             [routerLink]="item.url.replace('http://localhost:8080/Plone', '')"
             [routerLinkActive]="['active']">
            {{item.title}}
          </a>
        </nav>
      </div>
      <main class="mdl-layout__content">
        <div class="page-content"><!-- Your content goes here --></div>
      </main>
    </div>
  `,
  providers: [BackendService]
})
export class NavbarComponent implements OnInit {

  navbarItems: Array<string>;

  constructor(private backendService: BackendService) {}

  ngOnInit() {
    this.backendService.getNavbar().subscribe(
      data => {
        console.log(data);
        this.navbarItems = data[0].items;
       },
      err => console.log("Can't get page. Error code: %s, URL: %s ",
                err.status, err.url),
      () => console.log("Done")
    );
  }
}

