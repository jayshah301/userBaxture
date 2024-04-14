import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private userList: any[] = [];

  constructor() { }

  getUserList() {
    return this.userList;
  }

  generateUniqueUserID(){
    return Math.random().toString(36).substring(2, 9);
  }
}
