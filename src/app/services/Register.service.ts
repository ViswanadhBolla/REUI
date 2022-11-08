import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../models/Register';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  private baseurl = 'https://localhost:7263/api/Auth/Register';

  RegisterUser(userData: object): any {
    return this.http.post<any>(this.baseurl, userData)

    }
}
