import {Component} from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'cm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appVersion;

  constructor() {
    this.appVersion = environment.version;
  }
}
