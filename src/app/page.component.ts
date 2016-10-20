import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PageService } from "./page.service";
import { Page } from "./page";
import { Location } from "@angular/common";

@Component({
  selector: "plone-page",
  template: `
    <h2>{{pageTitle}}</h2>
    <b>{{pageDescription}}</b>
    <div [innerHTML]="pageText"></div>
  `,
  providers: [PageService]
})
export class PageComponent implements OnInit {

  sub: any;
  activePath: string;
  pageId: string;
  pageTitle: string;
  pageDescription: string;
  pageText: string;

  constructor(private location: Location, private route: ActivatedRoute, private pageService: PageService) {
    console.log(this.location.path());
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.activePath = params["path"];
      console.log("activePath: " + this.activePath);
      this.pageService.getPage(this.activePath).subscribe(
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
    });
  }
}
