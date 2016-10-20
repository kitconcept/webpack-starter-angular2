import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BackendService } from "./backend.service";
import { Page } from "./page";
import { Location } from "@angular/common";

@Component({
  selector: "plone-backend",
  template: `
    <h2>{{pageTitle}}</h2>
    <b>{{pageDescription}}</b>
    <div [innerHTML]="pageText"></div>
  `,
  providers: [BackendService]
})
export class BackendComponent implements OnInit {

  sub: any;
  activePath: string;
  pageId: string;
  pageTitle: string;
  pageDescription: string;
  pageText: string;

  constructor(private location: Location, private route: ActivatedRoute, private backendService: BackendService) {
    console.log(this.location.path());
  }

  ngOnDestroy(){
    console.log("destroy");
    this.sub.unsubscribe();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.activePath = params["path"];
      console.log("activePath: " + this.activePath);
      this.backendService.getPage(this.activePath).subscribe(
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
