import { Component, OnInit } from "@angular/core";
import { BackendService } from "./backend.service";
import { Page } from "./page";


@Component({
  selector: "kc-backend",
  template: `
    <h2>{{pageTitle}}</h2>
    <b>{{pageDescription}}</b>
    <div [innerHTML]="pageText"></div>
  `,
  providers: [BackendService]
})
export class BackendComponent implements OnInit {

  pageId: string;
  pageTitle: string;
  pageDescription: string;
  pageText: string;

  constructor(private backendService: BackendService) {}

  ngOnInit() {
    this.backendService.getPage("front-page").subscribe(
      data => {
        this.pageTitle = data.title;
        this.pageId = data.id;
        this.pageDescription = data.description;
        this.pageText = data.text.data;
       },
      err => console.log("Can't get page. Error code: %s, URL: %s ",
                err.status, err.url),
      () => console.log("Done")
    );
  }
}
