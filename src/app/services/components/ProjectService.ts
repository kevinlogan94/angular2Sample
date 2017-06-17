import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Headers, RequestOptions } from '@angular/http';
import {Project} from '../models/project';
import {endpointPost, endpointGet, endpointPut} from '../../constants';
// URL to web API

@Injectable()

export class ProjectService {
  constructor (private http: Http) {}

  getProject(): Observable<Project[]> {
    return this.http.get(endpointGet)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  postProject(id: number, name: string, dueDate: string): Observable<Project> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    //return this.http.post(endpointPost, { id, name }, options)
    return this.http.post(endpointPost, new Project(id, name, dueDate), options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  putProject(id: number, name: string, dueDate: string): Observable<Project> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(endpointPut, new Project(id, name, dueDate), options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
