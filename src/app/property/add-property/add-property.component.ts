import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms'
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/models/iproperty-base';
import { Property } from 'src/app/models/Property';
import { HousingService } from 'src/app/services/housing.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { PropertyType } from 'src/app/models/property-type';
import { FurnishTypes } from 'src/app/models/furnish-types';
import { Cities } from 'src/app/models/cities';
import {ReactiveFormValidators} from 'src/app/validators/FormValidators.validator'

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('formTabs') formTabs: TabsetComponent;

  constructor(private router:Router,
    private fb:FormBuilder,
    private housingService:HousingService,
    private alertify: AlertifyService
    ) { }



  addPropertyForm: FormGroup
  nextClicked: boolean;
  property = new Property();
  propertyTypes: PropertyType[];
  furnishTypes: FurnishTypes[];
  cityList:Cities[];

  propertyView : IPropertyBase ={
    id:null,
    name: '',
    price: null,
    sellRent: null,
    propertyType:null,
    furnishingType:null,
    bhk:null,
    builtArea: null,
    city: null,
    readyToMove: null
  };

  ngOnInit() {
    this.CreateAddPropertyForm();
    this.housingService.GetPropertyTypes().subscribe(
      data=>{
        this.propertyTypes=data['data']
        // console.log(this.propertyTypes);

      }
    )
    this.housingService.GetFurnishTypes().subscribe(
      data=>{
        this.furnishTypes=data['data']
        // console.log(this.furnishTypes);

      }
    )
    this.housingService.GetCityList().subscribe(
      data=>{
        this.cityList=data['data']
        // console.log(this.cityList);

      }
    )
  }

  CreateAddPropertyForm(){
    this.addPropertyForm = this.fb.group({


      BasicInfo:this.fb.group({
        sellRent: ['1', Validators.required],
      propertyType: [null, Validators.required],
      name: [null, [Validators.required,Validators.minLength(5)]],
      bhk: [null, Validators.required],
      furnishingType: [null,Validators.required],
      city:[null,Validators.required]
      }),


      PriceInfo:this.fb.group({
        price: [null, Validators.required],
      builtArea: [null, Validators.required],
      security: [null],
      maintenance: [null],
      carpetArea: [null]


      }),
      AddressInfo: this.fb.group({
        floorNo: [null],
        totalFloors: [null],
        address: [null, Validators.required],
        LandMark: [null],
    }),

    OtherInfo: this.fb.group({
        readyToMove: [null, Validators.required],
        PossessionOn: [null],
        age: [null],
        gated: [null],
        mainEntrance: [null],
        description: [null]
    })


    })
  }

// #region groups
  get BasicInfo(){
    return this.addPropertyForm.controls['BasicInfo'] as FormGroup
  }

  get PriceInfo() {
    return this.addPropertyForm.controls['PriceInfo'] as FormGroup;
}

get OtherInfo(){
  return this.addPropertyForm.controls['OtherInfo'] as FormGroup;
}

get AddressInfo(){
  return this.addPropertyForm.controls['AddressInfo'] as FormGroup;
}
// #endregion

// #region controllers
get sellRent() {
  return this.BasicInfo.controls['sellRent'] as FormControl;
}

get bhk() {
  return this.BasicInfo.controls['bhk'] as FormControl;
}

get propertyType() {
  return this.BasicInfo.controls['propertyType'] as FormControl;
}

get furnishingType() {
  return this.BasicInfo.controls['furnishingType'] as FormControl;
}

get name() {
  return this.BasicInfo.controls['name'] as FormControl;
}

get city() {
  return this.BasicInfo.controls['city'] as FormControl;
}

get price() {
  return this.PriceInfo.controls['price'] as FormControl;
}

get builtArea() {
  return this.PriceInfo.controls['builtArea'] as FormControl;
}

get carpetArea() {
  return this.PriceInfo.controls['carpetArea'] as FormControl;
}

get security() {
  return this.PriceInfo.controls['security'] as FormControl;
}

get maintenance() {
  return this.PriceInfo.controls['maintenance'] as FormControl;
}

get floorNo() {
  return this.AddressInfo.controls['floorNo'] as FormControl;
}

get totalFloors() {
  return this.AddressInfo.controls['totalFloors'] as FormControl;
}

get address() {
  return this.AddressInfo.controls['address'] as FormControl;
}

get LandMark() {
  return this.AddressInfo.controls['LandMark'] as FormControl;
}

get readyToMove() {
  return this.OtherInfo.controls['readyToMove'] as FormControl;
}

get PossessionOn() {
  return this.OtherInfo.controls['PossessionOn'] as FormControl;
}

get age() {
  return this.OtherInfo.controls['age'] as FormControl;
}

get gated() {
  return this.OtherInfo.controls['gated'] as FormControl;
}

get mainEntrance() {
  return this.OtherInfo.controls['mainEntrance'] as FormControl;
}

get description() {
  return this.OtherInfo.controls['description'] as FormControl;
}

// #endregion


onBack(){
  this.router.navigate(['/'])
}

onSubmit(){
  this.nextClicked=true
  if(this.allTabsValid()){
    this.mapProperty();
    this.housingService.addProperty(this.property).subscribe(data=>{
      console.log(data)
    },
    error=>{
      console.log(error);

    });
    this.alertify.success('Congrats, property added');
    // console.log(this.addPropertyForm);

    if(this.sellRent.value==='2'){
      this.refresh()
      this.router.navigate(['/rent-property'])
    }else{
      this.refresh1()
      this.router.navigate(['/'])
    }
  }else{
    this.alertify.error('Please provide valid entries');

  }
}

mapProperty(): void {
  this.property.id=this.housingService.newPropID();
  this.property.sellRent = +this.sellRent.value;
  this.property.bhk = this.bhk.value;
  this.property.propertyType = this.propertyType.value;
  this.property.name = this.name.value;
  this.property.city = this.city.value;
  this.property.furnishingType = this.furnishingType.value;
  this.property.price = +this.price.value;
  this.property.security = +this.security.value;
  this.property.maintenance = this.maintenance.value;
  this.property.builtArea = this.builtArea.value;
  this.property.carpetArea = this.carpetArea.value;
  this.property.floorNo = this.floorNo.value;
  this.property.totalFloors = this.totalFloors.value;
  this.property.address = this.address.value;
  this.property.address2 = this.LandMark.value;
  this.property.readyToMove = Boolean(+this.readyToMove.value);
  this.property.age = +this.age.value;
  this.property.gated = Boolean(+this.gated.value);
  this.property.mainEntrance = this.mainEntrance.value;
  this.property.estPossessionOn = new Date(this.PossessionOn.value);
  this.property.description = this.description.value;
  this.property.postedOn = new Date().toString();
  this.property.propertyTypeId = this.propertyTypes.find(p=>p.name===this.property.propertyType)['id'];
  this.property.furnishingTypeId = this.furnishTypes.find(p=>p.name===this.property.furnishingType)['id'];
  this.property.cityId = this.cityList.find(p=>p.name===this.property.city)['id'];
  this.property.lastUpdatedBy=+localStorage.getItem('tokenId')
  this.property.postedBy=+localStorage.getItem('tokenId')
}

allTabsValid() : boolean{
  if(this.BasicInfo.invalid){
    this.formTabs.tabs[0].active = true;
    return false;

  }
  if(this.PriceInfo.invalid){
    this.formTabs.tabs[1].active = true;
    return false;

  }
  if(this.AddressInfo.invalid){
    this.formTabs.tabs[2].active = true;
    return false;

  }
  if(this.OtherInfo.invalid){
    this.formTabs.tabs[3].active = true;
    return false;

  }
  return true

}

selectTab(tabId: number, isValid:boolean) {
  this.nextClicked=true
  if(isValid){
    this.nextClicked=false;
    this.formTabs.tabs[tabId].active = true;

  }
}
refresh(){
  let timerId=    setInterval(() => {
        //replaced function() by ()=>

        this.router.navigateByUrl('/rent-properties', {skipLocationChange: false}).then(() => {
        //  console.log( this.router.navigate(["/maps"]));
      });
      },1000);
      console.log("refresh")


     setTimeout(() => { clearInterval(timerId); 'stop' }, 1000);
    }
    refresh1(){
      let timerId=    setInterval(() => {
            //replaced function() by ()=>

            this.router.navigateByUrl('/', {skipLocationChange: false}).then(() => {
            //  console.log( this.router.navigate(["/maps"]));
          });
          },1000);
          console.log("refresh")


         setTimeout(() => { clearInterval(timerId); 'stop' }, 1000);
        }

}
