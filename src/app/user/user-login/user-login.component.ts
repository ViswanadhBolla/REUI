import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService:AuthService, private alertify: AlertifyService, private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(loginForm: NgForm){

    console.log(loginForm.value);
 this.authService.authUser(loginForm.value).subscribe(token=>{

  console.log("token",token.code)
  if(token.code === 302 ){
    localStorage.setItem('token',token.data);

    this.alertify.success('login Successful');
    this.router.navigate(['/'])

  }
  else{
    this.alertify.error('Login Unsuccessful');

  }






    })


  }

}
