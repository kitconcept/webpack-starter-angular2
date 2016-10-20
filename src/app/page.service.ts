import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { PageComponent } from "./page.component";
import { Page } from "./page";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";


@Injectable()
export class PageService {

  constructor(private http: Http) {}

  getPage(path: string): Observable<any> {

    let headers = new Headers({ "Accept": "application/json" });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(
      "http://localhost:8080/Plone/" + path,
      options
    ).map(response => response.json());
  }

  getNavbar(): Observable<any> {
    let headers = new Headers({ "Accept": "application/json" });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(
      "http://localhost:8080/Plone/@components/navigation",
      options
    ).map(response => response.json());
  }

}
