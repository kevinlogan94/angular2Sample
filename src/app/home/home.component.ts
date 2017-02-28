import {Component} from '@angular/core';
import {Message} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'home',
  //styleUrls: ['../../../node_modules/primeng/resources/themes/omega/theme.css'],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './home.component.html'
})
export class HomeComponent {
  msgs: Message[] = [];

  show() {
    this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
  }

  hide() {
    this.msgs = [];
  }

   showInfo() {
       this.msgs = [];
       this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
   }

   showWarn() {
       this.msgs = [];
       this.msgs.push({severity:'warn', summary:'Warn Message', detail:'There are unsaved changes'});
   }

   showError() {
       this.msgs = [];
       this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'});
   }

   showMultiple() {
       this.msgs = [];
       this.msgs.push({severity:'info', summary:'Message 1', detail:'PrimeNG rocks'});
       this.msgs.push({severity:'info', summary:'Message 2', detail:'PrimeUI rocks'});
       this.msgs.push({severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'});
   }

   clear() {
       this.msgs = [];
   }
}
