import { AbstractControl } from '@angular/forms';


export class ReactiveFormValidators{


  static numberTypeValidator(
    control: AbstractControl
  ):{[key:string]:boolean} | null{
    if(!+control.value){
      return {typeValid:true}
    }
    return null
  }

  static mobileNumberValidation(
    control: AbstractControl
  ):{[key:string]:boolean} | null{

    if(!/^[6-9]\d{9}$/.test(control.value)){
      return {numberValid:true}
    }

    return null
  }

  static userNameValidator(
    control: AbstractControl
  ):{[key:string]:boolean} | null{
    if(!/^[a-z0-9_\.]+$/.test(control.value)){
      return {userName:true}
    }
    return null
  }

}

