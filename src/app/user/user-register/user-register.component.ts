import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { RegisterService } from 'src/app/services/Register.service';
import { UserService } from 'src/app/services/user.service';
import { ReactiveFormValidators } from 'src/app/validators/FormValidators.validator';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registrationForm: FormGroup;
  userSubmitted:boolean;
  user: User ;
  constructor(private router:Router,
     private fb: FormBuilder,
    private userService: UserService,
    private alertify:AlertifyService,
    private Register:RegisterService) {}

  ngOnInit(): void {
    // this.registrationForm = new FormGroup({
    //   userName: new FormControl(null,[Validators.required]),
    //   email: new FormControl(null,[Validators.required,,Validators.email]),
    //   password: new FormControl(null,[Validators.required,Validators.minLength(8)]),
    //   confirmPassword: new FormControl(null,Validators.required),
    //   mobile: new FormControl(null,[Validators.required,Validators.maxLength(10)])
    // }, this.passwordMatchingValidator);
    this.createRegistrationForm();
  }
  createRegistrationForm() {
    this.registrationForm = this.fb.group(
      {
        userName: new FormControl(null, [Validators.required,Validators.minLength(3)]),
        email: new FormControl(null, [Validators.required, , Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmPassword: new FormControl(null, Validators.required),
        mobile: new FormControl(null, [
          Validators.required,
          // Validators.maxLength(10),
          ReactiveFormValidators.mobileNumberValidation
        ]),
      },
      { validators: this.passwordMatchingValidator }
    );
  }


  userData():User{
    return this.user={
      id:null,
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }

  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }
  get password() {
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }

  passwordMatchingValidator(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value
      ? null
      : { notmatched: true };
  }
  onSubmit() {
    console.log(this.registrationForm);
    this.userSubmitted=true;
    if (this.registrationForm.valid) {
    this.Register.RegisterUser(this.registrationForm.value).subscribe(data=>{
      console.log(data)
      if(data.code ===406){
        this.alertify.error(data.message)
      }
      else{
        if(data.code == 201){
          this.alertify.success(data.message)
          this.router.navigate(['/user/login'])
        }
      }

    }, err=>{
      console.log("Error:",err)
    })
    //  this.registrationForm.reset();
      this.userSubmitted=false

    }
    else{
      this.alertify.error('Kindly provide proper details')
    }
  }
}
