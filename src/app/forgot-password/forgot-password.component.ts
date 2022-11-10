import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotpassword : FormGroup;

  flag:boolean=true;
  submitflag:boolean=false;





  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.forgotpassword = new FormGroup({
      email: new FormControl(null,[Validators.required,Validators.email]),
      otp: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl( )
      })

    // this.forgotpassword= new FormGroup({
    //   email: new FormControl(null, [Validators.required, , Validators.email])
    //   });


  }

  GenerateOtp(){
    console.log("called")
    this.flag = false;
  }
  Verify(){

    this.submitflag = true;
  }

}
