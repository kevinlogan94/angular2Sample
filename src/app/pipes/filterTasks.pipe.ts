import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTasks',
  pure: false //We make it impure so our filter will update every change to the component
})
export class filterTasksPipe implements PipeTransform {
  transform(tasks: any[], term: any) {
    if(term === undefined || term == null) return tasks;
    return tasks.filter(function(task){
      return task.status === term;
    });
  }
}
