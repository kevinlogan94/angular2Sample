import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'home',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public fullPath:string = '../../images/robin.jpg';

  ngOnInit() {}

}
