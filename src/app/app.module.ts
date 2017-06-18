import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { filterTasksPipe } from './pipes/filterTasks.pipe';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { TodoComponent } from './todo/todo.component';
import { ProjectListComponent } from "./services/components/ProjectList.component";
import { justiceComponent} from './justice/justice.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    TodoComponent,
    ProjectListComponent,
    justiceComponent,
    filterTasksPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
