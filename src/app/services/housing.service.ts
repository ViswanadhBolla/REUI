import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { IProperty } from '../property/IProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private httpclient:HttpClient) { }
GetAllproperties(SellRent:number):Observable<IProperty[]>{
   return this.httpclient.get('data/properties.json').pipe(
    map(data=>{

      const propertiesArray:Array<IProperty>=[];
      for(const id in data){
        if(data.hasOwnProperty(id)&&data[id].SellRent===SellRent){
          propertiesArray.push(data[id]);
        }

      }
      return propertiesArray
    })
  )
}



}


