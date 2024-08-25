import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {DUMMY_USERS} from "./dummy-ussers";
import {AppTasksComponent} from "./app-tasks/app-tasks.component";
import {NgFor, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, AppTasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
  users = DUMMY_USERS;
  selecterUserId? :string;
/*  selectedid = ""
  onSelectedUser(id: string){
    console.log('Selected user with id '+ id);
    console.log(this.selectedid)
    this.selectedid=id
  }*/
  //obtener dinamicamente con un find devuelve true y el selected namme
get selectedUser(){
    return this.users.find((user) => user.id === this.selecterUserId);
}


  protected readonly event = event;

  onSelectUser(id: string) {
    this.selecterUserId = id ;
  }
}
