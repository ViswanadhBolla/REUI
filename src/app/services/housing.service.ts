import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { Cities } from '../models/cities';
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
  console.log(sellRent);


   return this.httpclient.get('https://localhost:7263/api/Property/list/'+sellRent)


}

addProperty(property: Property){


  const httpOptions = {
    headers: new HttpHeaders({
        Authorization: 'Bearer '+ localStorage.getItem('token')
    })
};
  // let newProp =[property];

  // if (localStorage.getItem('newProp')){
  //   newProp=[property,
  //   ...JSON.parse(localStorage.getItem('newProp'))];
  // }
  // localStorage.setItem('newProp', JSON.stringify(newProp));
  console.log(property)

  return this.httpclient.post('https://localhost:7263/api/Property/add',property,httpOptions)
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

GetPropertyTypes(){
  return this.httpclient.get('https://localhost:7263/api/PropertyType/list')
}

GetFurnishTypes(){
  return this.httpclient.get('https://localhost:7263/api/FurnishingType/list')
}

GetCityList(){
  return this.httpclient.get('https://localhost:7263/api/City/GetCities')
}

GetPropertyByPostedById(postedById: number){
  return this.httpclient.get('https://localhost:7263/api/Property/ListOfProperties/'+postedById)
}



}


