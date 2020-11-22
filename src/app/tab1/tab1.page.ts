import { Component } from '@angular/core';
import { Users } from '../model/users';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  users: Users[] = new Array();

  constructor(private userService: UsersService) {
    this.users = this.userService.getUsers();
  }

  increaseLike(type: number, position: number): void{
    if ( type === 0 )
    {
      this.users[position].like ++;
    }
  }

  increaseLove(type: number, position: number): void{
    if ( type === 0 )
    {
      this.users[position].love ++;
    }
  }
}
