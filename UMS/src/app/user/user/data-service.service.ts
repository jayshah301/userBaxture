import { Injectable } from '@angular/core';
import { User } from './model/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private users: User[] = [];
  private usersSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  private userList: any[] = [];

  constructor() {
    this.loadUsersFromLocalStorage();
  }


  loadUsersFromLocalStorage() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
      this.usersSubject.next([...this.users]);
    }
  }
  getUserList() {
    return this.usersSubject.asObservable();
  }

  deleteUser(userId: any) {
    this.users = this.users.filter(u => u.id !== userId);
    this.saveUsersToLocalStorage();
    this.usersSubject.next([...this.users]);
  }

  generateUniqueUserID() {
    return Math.random().toString(36).substring(2, 9);
  }

  addUser(user: any) {
    console.log("@#@#", user);
    const index = this.users.findIndex(u => u.id === user.id);
    console.log(index);
    if (index === -1) {
      user.id = this.generateUniqueUserID();
      this.users.push(user);
      this.saveUsersToLocalStorage()
      this.usersSubject.next([...this.users]);
      //console.log("@#@#List",this.userList);
    } else {
      throw new Error('User Already Exist')

    }

  }

  updateUser(user: User) {
    const existingUserIndex = this.users.findIndex(u => u.id === user.id);
    if (existingUserIndex === -1) {
      // User doesn't exist
      throw new Error('User does not exist.');
    }

    this.users[existingUserIndex] = user;
    this.saveUsersToLocalStorage();
    this.usersSubject.next([...this.users]);
  }

  private saveUsersToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  getUserById(userId: string): User | undefined {
    return this.users.find(user => user.id === userId);
  }

  checkUserexist(useremail:string){
    const userPresent = this.users.some((userEmail:any)=>userEmail.email===useremail);
    if(userPresent){
      return true;
    }
    return false
  }
}
