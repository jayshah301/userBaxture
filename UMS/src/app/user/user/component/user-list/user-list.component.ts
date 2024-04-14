import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  constructor(private dataService :DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getUserList().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  deleteUser(userId: string) {
    this.dataService.deleteUser(userId);
  }

}
