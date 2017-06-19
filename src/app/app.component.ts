import { Component, ViewEncapsulation } from '@angular/core';
import { githubUrl } from './constants';

@Component({
  selector: 'app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent { githubUrl = githubUrl; }
