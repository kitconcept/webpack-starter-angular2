import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-backend',
  template: `
    <h1>people</h1>
    <ul class="people">
      <li *ngFor="let person of people">
        hello, {{person['name']}}
      </li>
    </ul>
  `
})
export class Backend {
  people: Object[];
  constructor(http: Http) {
    console.log('In Backend component');
    http.get('people.json')
        .map((res: Response) => res.json())
        .subscribe((people: Array<Object>) => this.people = people);
  }
}
