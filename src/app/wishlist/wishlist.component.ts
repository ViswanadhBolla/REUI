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
    "Id":1,
    "SellRent":2,
    "Name":"Birla House",
    "PType":"House",
    "BHK":2,
    "FType":"Fully",
    "Price":1,
    "BuiltArea":1200,
    "CarpetArea":900,
    "Image":"house.jpg",
    "Address":"6 Street",
    "Address2":"Golf Course Road",
    "Address3":"Near Bank of America",
    "City":"Atlanta",
    "Description":"Well Maintained builder floor available for rent at prime location. # property features- - 5 mins away from metro station - Gated community - 24*7 security. # property includes- - Big rooms (Cross ventilation & proper sunlight) - Drawing and dining area - Washrooms - Balcony - Modular kitchen - Near gym, market, temple and park - Easy commuting to major destination. Feel free to call With Query.",
    "FloorNo":"3",
    "TotalFloor":"3",
    "AOP":10,
    "Bathrooms":2,
    "MainEntrance":"East",
    "Gated":1,
    "Security":0,
    "Maintenance":300,
    "Posession":"Ready to move",
    "PostedOn":"01-Jan-2019"
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
