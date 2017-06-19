import { Component } from '@angular/core';
import { linkedinUrl } from '../constants';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent { linkedinUrl = linkedinUrl; }
