import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authUser(user: any){
    let UserArrayy =[];
    if(localStorage.getItem('Users')){
      UserArrayy = JSON.parse(localStorage.getItem('Users'));
    }
    return UserArrayy.find(p=>p.userName === user.userName && p.password === user.password)
  }
}
