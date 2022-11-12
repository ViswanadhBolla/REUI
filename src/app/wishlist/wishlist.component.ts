import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProperty } from '../models/IProperty';
import { IPropertyBase } from '../models/iproperty-base';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  public properties:Array<any>=[]
  public receivedWishdata:any
  constructor(private wishlist:WishlistService,private router:Router) {
  console.log("constructor")

  }

  ngOnInit() {
    this.wishlist.GetWishedData(+localStorage.getItem("tokenId")).subscribe(data=>{
      this.properties = data.data
this.refresh()
      console.log("onit",this.properties.length)
    })
  }

  refresh(){
    let timerId=    setInterval(() => {
          //replaced function() by ()=>

          this.router.navigateByUrl('/wishlister', {skipLocationChange: false}).then(() => {
          //  console.log( this.router.navigate(["/maps"]));
        });
        },1000);
        console.log("refresh")


       setTimeout(() => { clearInterval(timerId); 'stop' }, 1000);
      }


    }

