import { Injectable } from '@angular/core';
import User from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  users : User[];

  constructor() { 
    this.users= [
      {id:"1", fName:"Omar", lName:"Zayed", email:"omar@gmail.com", address:"No. 7 st", city:"Maadi", state:"Cairo", gender: 0 },
      {id:"2", fName:"Ahmed", lName:"Ali", email:"ahmed@gmail.com", address:"No. 111 st", city:"Helwan", state:"Cairo", gender: 0 },
      {id:"3", fName:"Ali", lName:"Gabr", email:"ali@gmail.com", address:"No. 11 st", city:"Mansoura", state:"Gharbia", gender: 0 },
      {id:"4", fName:"Essam", lName:"Soltan", email:"essam@gmail.com", address:"No. 14 st", city:"Zagazig", state:"Sharkia", gender: 0 },
      {id:"5", fName:"Waheed", lName:"Mohamed", email:"waheed@gmail.com", address:"No. 33 st", city:"Sakr", state:"Sharkia", gender: 0 },
      {id:"6", fName:"Dina", lName:"Gamal", email:"dina@gmail.com", address:"No. 4 st", city:"Portsaid", state:"Portsaid", gender: 1 },
      {id:"7", fName:"Gamal", lName:"Hassan", email:"gamal@gmail.com", address:"No. 50 st", city:"Portsaid", state:"Portsaid", gender: 0 },
      {id:"8", fName:"Fatma", lName:"Alaa", email:"fayma@gmail.com", address:"No. 6 st", city:"October", state:"Giza", gender: 1 }
    ];
  }

  getAll() {
    return this.users;
  }
  getById(userId : string) {
    return this.users.find(u => u.id === userId);
  }
  delete(userId : string) {
    const id = this.users.findIndex(u => u.id === userId);
    if(id > -1) this.users.splice(id, 1);
    console.log(this.users);
  }
  add(user : User) {
    this.users.push(user);
  }
  edit(user : User) {
    const u = this.getById(user.id);
    Object.assign(u, user);
  }
}
