import {NgModule} from "@angular/core";
import {TaskComponent} from "./task/task.component";
import {AppTasksComponent} from "./app-tasks.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    TaskComponent,
    AppTasksComponent,
    NewTaskComponent
  ],
  exports:[AppTasksComponent],
  imports:[SharedModule,CommonModule,FormsModule]
})
export class TasksModule {

}
