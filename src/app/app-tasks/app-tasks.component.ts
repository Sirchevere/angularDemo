import {Component, EventEmitter, input, Input, Output} from '@angular/core';
import {DUMMY_USERS} from "../dummy-ussers";
import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {type NewTaskData} from "./task/task.model";
import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './app-tasks.component.html',
  styleUrl: './app-tasks.component.css'
})
export class AppTasksComponent {

  @Input({required: true}) userId! : string;
  //@Output() selectedName = new EventEmitter<string>();
  @Input({required:true})name!: string | undefined;
  isAddinTask = false;

   constructor(private tasksService: TasksService) {}
/*  name = ""


  selected(id: string){
   const selected = DUMMY_USERS.find(user => user.id === id)
    console.log("este es el id"+id)
    this.name = selected!.name;
   return this.name
  }*/
get selectedUserTasks(){
  return this.tasksService.getUserTasks(this.userId);
}

onCompleteTask(id : string){

}
onStartAddTask(){
  this.isAddinTask= true;
}
onCloseAddTask(){
  this.isAddinTask=false;
}


  protected readonly onclose = onclose;
}
