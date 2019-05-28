import { Component, OnInit, Input } from '@angular/core';
import User from '../../../model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @Input() users : User[];
  usersService : UserService;

  constructor(private _usersService : UserService) {
    this.usersService = _usersService;
    this.usersService.userDeleted.subscribe(id => {
      const index = this.users.findIndex(u => u.id === id);
      if(index > -1) this.users.splice(index, 1);
    });
  }
  
  ngOnInit() {
    this.users = this.usersService.getAll();
  }

  search(searchText) {
    if(searchText !== "") this.users = this.usersService.search(searchText.value);
  }
  reset(searchText) {
    searchText.value = "";
    this.users = this.usersService.getAll();
  }

}
