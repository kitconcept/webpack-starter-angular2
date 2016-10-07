import { Component, OnInit } from "@angular/core";
import { BackendService } from "./backend.service";
import { Page } from "./page";


@Component({
  selector: "kc-backend",
  template: `
    <h2>Backend Component</h2>
    <p>This is the backend component which can be found in src/app/backend.ts</p>
    <ul class="pages">
      <li *ngFor="let page of pages">
        {{page.id}}: {{page.title}}
      </li>
    </ul>
  `,
  providers: [BackendService]
})
export class BackendComponent implements OnInit {
  pages: Page[];

  constructor(private backendService: BackendService) { }

  getPages(): void {
    this.backendService.getBackend().then(pages => this.pages = pages);
  }

  ngOnInit(): void {
    this.getPages();
  }

}
