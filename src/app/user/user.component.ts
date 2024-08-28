import {Component, computed, signal, Input, input, EventEmitter, Output, output} from '@angular/core';
import {DUMMY_USERS} from "../dummy-ussers";
const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)

import {type User} from "./user.model";

/*type User = {
  id : string;
  avatar : string;
  name: string;
}*/


@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //normal
/*selectedUser = signal(DUMMY_USERS[randomIndex]) ;
imagePath = computed(()=>'assets/users/'+ this.selectedUser().avatar)*/
/*get imagePath(){
  return 'assets/users/' + this.selectedUser().avatar
}*/
  @Input ({required:true}) selected! : boolean;
  @Input({required:true}) user!: User ;
  //el generico es extraseguridad
  @Output() select = new EventEmitter<string>();
  //Hace lo mismo
  /*select = output<string>();*/

  //Signals
/*avatar = input.required<string>();
name = input.required<string>();

imagePath = computed(()=>{
  return 'assets/users/'+this.avatar();
});*/
  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }
onSelectUser(){
this.select.emit(this.user.id);
/*  const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
  this.selectedUser.set(DUMMY_USERS[randomIndex]);*/
}
}
