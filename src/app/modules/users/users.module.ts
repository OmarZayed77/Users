import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {AngularMaterialModule} from '../angular-material/angularMaterial.module';

import { UsersListComponent } from './users-list/users-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserCardComponent } from './user-card/user-card.component';


@NgModule({
  declarations: [
    UsersListComponent, 
    UserAddComponent,
     UserEditComponent,
     UserCardComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild(
      [
          {path:'', component: UsersListComponent},
          {path:'add', component: UserAddComponent},
          {path:'edit/:id', component: UserEditComponent},
      ]
    )
  ]
})
export class UsersModule { }
