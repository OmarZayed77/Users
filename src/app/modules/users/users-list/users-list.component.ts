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
  }
  
  ngOnInit() {
    this.users = this.usersService.getAll();
  }

}
