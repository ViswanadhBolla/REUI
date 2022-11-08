import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  private baseurl = 'https://localhost:7263/api/Auth/Login';

  authUser(userData: any):any{

    return    this.http.post<any>(this.baseurl, userData)
    // let UserArrayy =[];
    // if(localStorage.getItem('Users')){
    //   UserArrayy = JSON.parse(localStorage.getItem('Users'));
    // }
    // return UserArrayy.find(p=>p.userName === user.userName && p.password === user.password)
  }


}
