import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TodoComponent } from './todo/todo.component';
import {ProjectListComponent} from "./services/components/ProjectList.component";
import { justiceComponent } from './justice/justice.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'rest', component: ProjectListComponent },
  { path: 'justice', component: justiceComponent },
  { path: 'contact', component: ContactComponent }
];
