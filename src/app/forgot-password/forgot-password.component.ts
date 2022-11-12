import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { AlertifyService } from '../services/alertify.service';
import { ComplaintService } from '../services/complaint.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotpassword : FormGroup;
  otpVerify : FormGroup;
  flag:boolean=true;
  submitflag:boolean=false;
  otp:number ;




  constructor(private fb: FormBuilder, private service:ComplaintService,private alert:AlertifyService) { }

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

  GenerateOtp(data){
    console.log("called",data.value.email)
    this.service.GenerateOtp(data.value.email).subscribe(data=>{
      console.log(data)
      this.otp = data.data
      if(data.code ===200){
        this.flag = false;
        this.alert.success(data.message)
      }
      else{
        this.alert.error(data.error)
      }

    },err=>{this.alert.error(err)})


  }
  Verify(data){

    if(data.value.otp ===this.otp){
      this.alert.success("Verified succefully")
      this.submitflag = true;
      this.flag = !this.flag
    }
    else{
      this.alert.error("Invalid Otp")
    }


  }
  submit(data){
    console.log(data.value)
    this.service.changePassword(data).subscribe(data=>{
      console.log("uawrestyui",data)
    },err=>{console.log(err)})
  }

}
