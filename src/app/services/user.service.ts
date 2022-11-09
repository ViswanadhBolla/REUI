import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  addUser(user:User){
    let users = [];
    if(localStorage.getItem('Users')){
      users=JSON.parse(localStorage.getItem('Users'));
      users=[user,...users];

    }
    else{
      users=[user];
    }
    localStorage.setItem('Users',JSON.stringify(users))
  }

  GetAllUsers():Observable<User[]>{

    return this.httpClient.get<User[]>('/data/Users.json')


  }

  GetUserByID(id:number){
    return this.GetAllUsers().pipe(
      map(usersArray=>{
        return usersArray.find(p=>p.id===id)
      })
    )
  }
}
