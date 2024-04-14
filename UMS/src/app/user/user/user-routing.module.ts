import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserInsertComponent } from './component/user-insert/user-insert.component';

const routes: Routes = [
  {
    path: '', component: UserListComponent
  },{
    path:'userInsert',component:UserInsertComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
