import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import User from '../../../model/user';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() user : User;
  @Input() isNew : boolean;
  userForm : FormGroup;
  userService : UserService;
  router : Router;
  activatedRoute : ActivatedRoute

  constructor(private _userService : UserService, private _router : Router, private _activatedRoute : ActivatedRoute) { 
    this.userService = _userService;
    this.router = _router;
    this.activatedRoute = _activatedRoute;
  }
  getUser() {
    return this.userService.getById(this.activatedRoute.snapshot.params['id']);
  }
  ngOnInit() {
    if(this.isNew) this.user = {id:"", fName:"", lName:"", email:"", address:"", city:"", state:"", gender: 0 };
    else this.user = this.getUser();
    this.userForm = new FormGroup(
    {
      'fName': new FormControl(this.user.fName, [
        Validators.required
      ]),
      'lName': new FormControl(this.user.lName, [
        Validators.required
      ]),
      'address': new FormControl(this.user.address, [
        Validators.required
      ]),
      'city': new FormControl(this.user.city, [
        Validators.required
      ]),
      'state': new FormControl(this.user.state, [
        Validators.required
      ]),
      'gender': new FormControl(this.user.gender, [
        Validators.required
      ]),
      'email': new FormControl(this.user.email, [
        Validators.required,
        Validators.email
      ])
    });
  }
  onSubmit() {
    this.user.fName = this.userForm.get('fName').value;
    this.user.lName = this.userForm.get('lName').value;
    this.user.email = this.userForm.get('email').value;
    this.user.address = this.userForm.get('address').value;
    this.user.city = this.userForm.get('city').value;
    this.user.state = this.userForm.get('state').value;
    this.user.gender = this.userForm.get('gender').value;
    if(this.userForm.invalid) {
      alert("Please enter valid data first!")
    }
    else {
      if(this.isNew)
      {
        this.user.id = new Date().toString();
        this.userService.add(this.user);
      }
      else this.userService.edit(this.user);
      this.router.navigate(['/users']);
    }
  }
}
