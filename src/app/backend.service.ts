import { Injectable } from "@angular/core";
import { BackendComponent } from "./backend";
import { Page } from "./page";
import { PAGES } from "./mock-pages";

@Injectable()
export class BackendService {
  getBackend(): Promise<Page[]> {
    return Promise.resolve(PAGES);
  }
}
