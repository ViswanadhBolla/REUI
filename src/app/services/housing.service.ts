import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { IPropertyBase } from 'src/app/models/iproperty-base';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private httpclient:HttpClient) { }
GetAllproperties(SellRent:number):Observable<IPropertyBase[]>{
   return this.httpclient.get('data/properties1.json').pipe(
    map(data=>{

      const propertiesArray:Array<IPropertyBase>=[];
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


