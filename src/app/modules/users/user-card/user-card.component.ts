import { Component, OnInit, Input } from '@angular/core';
import User from '../../../model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user : User;
  bgColor : string;
  avatar : string;
  userService : UserService;

  constructor(private _userService : UserService) { 
    this.userService = _userService;
  }

  ngOnInit() {
    this.bgColor = (this.user.gender === 0) 
      ? 'rgb(233, 231, 231)'
      : 'rgb(255, 187, 131)';
    this.avatar = (this.user.gender === 0) 
      ? 'https://banner2.kisspng.com/20180325/bgw/kisspng-female-clip-art-avatar-5ab751aeeeb9b0.3078693815219634389778.jpg'
      : 'https://www.clipartmax.com/png/middle/0-6213_faceless-clipart.png';
  }

  deleteUser(id){
    this.userService.delete(id);
  }
}
