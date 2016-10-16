import { Component, OnInit } from "@angular/core";
import { BackendService } from "./backend.service";

@Component({
  selector: "plone-navbar",
  template: `
    <ul>
      <li *ngFor="let item of navbarItems">
        <a [routerLink]="item.url.replace('http://localhost:8080/Plone', '')">{{item.title}}</a>
      </li>
    <ul>
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

