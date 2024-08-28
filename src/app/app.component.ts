import { Component } from '@angular/core';

import {DUMMY_USERS} from "./dummy-ussers";

@Component({
  selector: 'app-root',
  standalone: false,
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
