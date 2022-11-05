import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IPropertyBase } from 'src/app/models/iproperty-base';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
curreny:any ="USD"
  status:any

  @Input() property:IPropertyBase;


  @Input() hideIcons : boolean;


  constructor() {
    if(!localStorage.getItem("token")){
        this.status =true
    }
    else{
        this.status =false
    }
   }

  ngOnInit() {
  }

  onSelected(data){
    console.log("data",data)
    if(data === "INR" && this.curreny ==="USD"){
      this.property.Price = +this.property.Price*81.98
      this.curreny = data
    }
    else if(data === "USD" && this.curreny ==="INR"){
      this.property.Price = +this.property.Price/81.98
      this.curreny = data
    }


  }

}
