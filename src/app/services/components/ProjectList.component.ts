import {Component, OnInit} from "@angular/core";
import {ProjectService} from './ProjectService';
import {Project} from '../models/project';

@Component({
    selector: 'ProjectDashboard',
    templateUrl: './ProjectDashboard.html',
    providers: [ProjectService]
})
export class ProjectListComponent implements OnInit {
    projects: Project[];
    mode = 'Observable';
    errorMessage: string;

    constructor(private projectService: ProjectService) {}

    ngOnInit() {
      //this.getProject();
    }

    getProject() {
      this.projectService.getProject()
                         .subscribe(
                           projects => this.projects = projects,
                           error => this.errorMessage = <any>error);
    }

    addProject(id: number, name: string, dueDate:string) {
      if (id && name && dueDate) {
        //addproject() api call

        //api call
        this.projectService.postProject(id, name, dueDate)
                    .subscribe(
                      project  => this.projects.push(project),
                      error =>  this.errorMessage = <any>error);

        //new ProjectService(Project).postProject(id, name);
        alert(id + " " + name + " " + dueDate);
      } else {
        alert("Please fill all fields");
      }
    }

    editProject(id: number, name: string, dueDate:string) {
      if (id && name && dueDate) {
        //addproject() api call

        //api call
        this.projectService.putProject(id, name, dueDate)
                    .subscribe(
                      project  => this.projects.push(project),
                      error =>  this.errorMessage = <any>error);

        //new ProjectService(Project).postProject(id, name);
        alert(id + " " + name + " " + dueDate);
      } else {
        alert("Please fill all fields");
      }
    }

}
