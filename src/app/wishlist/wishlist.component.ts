import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from '../models/IProperty';
import { IPropertyBase } from '../models/iproperty-base';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  public properties:Array<any>=[{
    "id":1,
    "sellRent":2,
    "name":"Birla House",
    "propertyType":"House",
    "bhk":2,
    "furnishingType":"Fully",
    "price":1,
    "builtArea":1200,
    "carpetArea":900,
    "photo":"house.jpg",
    "address":"6 Street",
    "address2":"Golf Course Road",
    "Address3":"Near Bank of America",
    "city":"Atlanta",
    "description":"Well Maintained builder floor available for rent at prime location. # property features- - 5 mins away from metro station - gated community - 24*7 security. # property includes- - Big rooms (Cross ventilation & proper sunlight) - Drawing and dining area - Washrooms - Balcony - Modular kitchen - Near gym, market, temple and park - Easy commuting to major destination. Feel free to call With Query.",
    "floorNo":"3",
    "totalFloors":"3",
    "age":10,
    "Bathrooms":2,
    "mainEntrance":"East",
    "gated":1,
    "security":0,
    "maintenance":300,
    "estPossessionOn":"Ready to move",
    "postedOn":"01-Jan-2019"
  }]
  public receivedWishdata:any
  constructor(private wishlist:WishlistService) {
  console.log("constructor")

  }

  ngOnInit() {
    this.wishlist.myMethod$.subscribe(data=>{
      this.properties.push(data)
      console.log("onit",this.properties.length)
    })
  }

}
