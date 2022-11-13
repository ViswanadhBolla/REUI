import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private httpClient : HttpClient) { }


  addPhoto(propId: number, photoFile:any){
    console.log(propId);
    console.log(photoFile)
     return this.httpClient.post('https://localhost:7263/api/Photo/add/photo/'+propId,photoFile).subscribe(data=>{
      console.log(data);

     })
  }

  deletePhoto(propId: number, publicId:string){
    console.log(propId);
    console.log(publicId);


    return this.httpClient.delete('https://localhost:7263/api/Photo/deletephoto/'+propId+"/"+publicId).subscribe(
      data=>{
        console.log(data);

      }
    )

  }

  setMainPhoto(propId:number, publicId:string){
    console.log(propId);
    console.log(publicId);


    return this.httpClient.post('https://localhost:7263/api/Photo/setprimaryphoto/'+propId+"/"+publicId,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8'
      })
    }).subscribe()
  }



}
