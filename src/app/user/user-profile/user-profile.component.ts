import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {User} from 'src/app/models/user'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router : Router) { }

  public id : number;
  user :User;

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.route.data.subscribe(
      (data:User)=>{
        this.user = data['usr']
        // console.log(this.user);

      }
    )
  }

}
