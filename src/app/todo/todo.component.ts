import {Component} from '@angular/core';
import {task} from './models/task';
import {filterTasksPipe} from '../pipes/filterTasks.pipe'

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent {
  tasks: task[]=[];
  id: number = -1;
  filter: boolean;
  shownTasks='All Tasks';

  addTask(todo: string){
    //++this.id increments the id before it is used as an argument
    this.tasks.push(new task(++this.id, todo, false));
  }

  //deletes based off id
  removeTodo(todoId: number) {
    let index: number = -1;
    let ctr: number = 0;

    //find the index of the task object you want to remove
    for (let task of this.tasks){
      if(task.id == todoId){
        index = ctr;
      }
      ctr++;
    }

    //if we get a result delete it
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }
}
