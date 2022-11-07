import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { IPropertyBase } from 'src/app/models/iproperty-base';
import { IProperty } from '../models/IProperty';
import { Property } from '../models/Property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private httpclient:HttpClient) { }
GetAllproperties(SellRent:number):Observable<IPropertyBase[]>{
   return this.httpclient.get('data/properties1.json').pipe(
    map(data=>{

      const propertiesArray:Array<IPropertyBase>=[];
      const localProperties = JSON.parse(localStorage.getItem('newProp'));
      if(localProperties){
        for(const id in localProperties){
          if(localProperties.hasOwnProperty(id)&&localProperties[id].SellRent===SellRent){
            propertiesArray.push(localProperties[id]);
          }

        }
      }



      for(const id in data){
        if(data.hasOwnProperty(id)&&data[id].SellRent===SellRent){
          propertiesArray.push(data[id]);
        }

      }
      return propertiesArray
    })
  );
  return this.httpclient.get<IProperty[]>('data/properties1.json')
}

addProperty(property: Property){
  let newProp =[property];

  if (localStorage.getItem('newProp')){
    newProp=[property,
    ...JSON.parse(localStorage.getItem('newProp'))];
  }
  localStorage.setItem('newProp', JSON.stringify(newProp));
}

newPropID(){
  if(localStorage.getItem('PID')){
    localStorage.setItem('PID',String(+localStorage.getItem('PID') +1))
    return +localStorage.getItem('PID')
  }else{
    localStorage.setItem('PID','101');
    return 101;
  }
}


}


