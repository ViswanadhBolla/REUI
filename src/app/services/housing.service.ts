import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { IProperty } from '../models/IProperty';
import { Property } from '../models/Property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private httpclient:HttpClient) { }

getProperty(id:number){


  return this.httpclient.get('https://localhost:7263/api/Property/detail/'+id)
}

GetAllproperties(sellRent?:number){

   return this.httpclient.get('https://localhost:7263/api/Property/list/'+sellRent)


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


