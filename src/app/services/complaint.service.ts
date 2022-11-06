import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

constructor(private http:HttpClient) { }

private baseurl = "https://localhost:7242/api/Email"

complaintMail(requestMail:string, subject:string):any{
console.log(this.baseurl+"/"+requestMail+"/"+subject)

    return this.http.post<any>(this.baseurl+"/"+requestMail+"/"+subject,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8'
      })
    }).subscribe(data=>{
      console.log(data)
    },err=>{console.log(err)})
}
}
