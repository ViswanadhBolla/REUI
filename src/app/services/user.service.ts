import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  GetUserByID(id:number){

    return this.httpClient.get('https://localhost:7263/api/Auth/user/'+id)


  }
}
