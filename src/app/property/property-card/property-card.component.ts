import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IPropertyBase } from 'src/app/models/iproperty-base';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
curreny:any ="INR"
  status:any
  @Input() property:IPropertyBase;
  @Input() hideIcons : boolean;

  constructor(private wishcontent:WishlistService) {
    if(!localStorage.getItem("token")){
        this.status =true
    }
    else{
        this.status =false
    }
   }

  ngOnInit() {
  console.log(this.property.City)
  }

  onSelected(data){
    console.log("data",data)
    if(data === "INR" && this.curreny ==="USD"){
      this.property.Price = +this.property.Price/81.98
      this.curreny = data
    }
    else if(data === "USD" && this.curreny ==="INR"){
      this.property.Price = +this.property.Price*81.98
      this.curreny = data
    }
  }

  Wishdata(){
    console.log("wish method called")
    this.wishcontent.myMethod(this.property)
  }


}
