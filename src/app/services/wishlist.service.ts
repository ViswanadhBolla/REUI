import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IProperty } from '../models/IProperty';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  myMethod$: Observable<any>;
    private myMethodSubject = new BehaviorSubject<any>(" ");

    constructor(private http:HttpClient) {
        this.myMethod$ = this.myMethodSubject.asObservable();
    }

    myMethod(data) {
        console.log( "service called",data);
        this.myMethodSubject.next(data);
    }

    private baseurl = 'https://localhost:7263/api/Wish';


    wishPropery(userData: object): any {
      return this.http.post<any>(this.baseurl, userData).subscribe(data=>{
        console.log(data)
      },err=>{console.log(err)})

      }

      GetWishedData(id:number){
        return this.http.get<any>(this.baseurl+"/userWished/"+id);
      }
}
