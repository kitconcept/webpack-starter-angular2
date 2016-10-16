import { Component, OnInit } from "@angular/core";
import { BackendService } from "./backend.service";
import { Page } from "./page";


@Component({
  selector: "kc-backend",
  template: `
    <h2>{{pageTitle}}</h2>
    <p>This is the backend component which can be found in src/app/backend.ts</p>
    <p>{{pageId}}</p>
    <div [innerHTML]="pageText"></div>
  `,
  providers: [BackendService]
})
export class BackendComponent implements OnInit {

  pageId: string;
  pageTitle: string;
  pageText: string;

  constructor(private backendService: BackendService) {}

  ngOnInit() {
    this.backendService.getPage("front-page").subscribe(
      data => {
        this.pageTitle = data.title;
        this.pageId = data.id;
        this.pageText = data.text.data;
       },
      err => console.log("Can't get page. Error code: %s, URL: %s ",
                err.status, err.url),
      () => console.log("Done")
    );
  }
}
