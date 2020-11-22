import { Injectable } from '@angular/core';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: Users[] = new Array();

  constructor() {
    this.users.push({
      name: 'Edwin Antonio',
      state: 'Tepic',
      like: '23',
      love: '32',
      hobby: ['Tiro', 'Arquería', 'Juegos', 'Ajedrez', 'DINERO']
    });
    this.users.push({
      name: 'MIguel Leopoldo',
      state: 'Tepic',
      like: '40',
      love: '13',
      hobby: ['Videojuegos', 'FUtbol']
    });
   }

   getUsers(): Users[] {
     return this.users;
   }

   changeInfo(position: number): void{
     this.users[position].name = this.users[position].name;
   }
}
