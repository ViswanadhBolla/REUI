import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms'
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/models/iproperty-base';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('formTabs') formTabs: TabsetComponent;
  addPropertyForm: FormGroup
  constructor(private router:Router, private fb:FormBuilder) { }



  propertyTypes: Array<string>=['House','Apartment','Duplex'];
  furnishTypes: Array<string> = ['Fully','Semi','Unfurnished']

  propertyView : IPropertyBase ={
    Id:null,
    Name: '',
    Price: null,
    SellRent: null,
    PType:null,
    FType:null,
    BHK:null,
    BuiltArea: null,
    City: null,
    RTM: null
  };

  ngOnInit() {
    this.CreateAddPropertyForm();
  }

  CreateAddPropertyForm(){
    this.addPropertyForm = this.fb.group({
      SellRent: [null, Validators.required],
      PType: [null, Validators.required],
      Name: [null, Validators.required],
      Price: [null, Validators.required],
      BuiltArea: [null, Validators.required]

    })
  }



onBack(){
  this.router.navigate(['/'])
}

onSubmit(){
  console.log('congrats,form submitted');
  console.log(this.addPropertyForm.value.SellRent);
  console.log(this.addPropertyForm)

  // console.log("SellRent " + Form.value.BasicInfo.SellRent);

  // console.log(Form);


}

selectTab(tabId: number) {

    this.formTabs.tabs[tabId].active = true;

}
}
