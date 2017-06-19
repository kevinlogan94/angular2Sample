import { Component } from '@angular/core';
import { characters } from '../constants'

@Component({
  selector: 'justice',
  styleUrls: ['./justice.component.css'],
  templateUrl: './justice.component.html'
})
export class justiceComponent {
  characters: String[] = characters;
  chosen: String[] = [];
  result: boolean;

  testYourMight() {
    let random = Math.floor(Math.random() * 100) + 1;
    if(random >= 50)this.result = true
    else this.result=false;
    window.scrollTo(0,document.body.scrollHeight);
  }

  choose(character: String) {
    if (this.chosen.indexOf(character) == -1 && this.chosen.length < 3) {
      this.chosen.push(character)
    }
    else if (this.chosen.indexOf(character) > -1) {
      this.chosen.splice(this.chosen.indexOf(character), 1);
    }
  }

  reset() { this.chosen = []; this.result=null; }

}
