import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserInsertComponent } from './component/user-insert/user-insert.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserInsertComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
