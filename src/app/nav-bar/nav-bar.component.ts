import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedinUserID: string = null;
  loggedinUserName: string = null;
  token:any;
  user :User;
  constructor() { }

  ngOnInit() {
  }

  loggedin(){
    // this.token = JSON.parse(localStorage.getItem('token'));
    // this.loggedinUserID=this.token[0]
    // this.loggedinUserName=this.token[1]
    this.loggedinUserID=localStorage.getItem('tokenId')
    this.loggedinUserName=localStorage.getItem('token')

    return this.loggedinUserID;
  }
  onLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('tokenId');

  }

}
