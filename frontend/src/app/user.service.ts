import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  isLoggedIn: boolean;

  constructor() {
    this.isLoggedIn = false;
  }

 signIn(res:boolean) {
   
    
    this.isLoggedIn = res;
  }

  signOut() {
    this.isLoggedIn = false;
  }



}