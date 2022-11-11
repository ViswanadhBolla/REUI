import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from '../services/alertify.service';
import { ComplaintService } from '../services/complaint.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

  complaintform:FormGroup
  userSubmit:boolean
  data:any
  constructor(private complaint:ComplaintService,private alert:AlertifyService) { }

  ngOnInit() {
this.complaintform = new FormGroup({
  firstname: new FormControl(null, [Validators.required]),
  email: new FormControl(null, [Validators.required, Validators.email]),
  subject: new FormControl(null, [Validators.required]),
  range: new FormControl( null, [Validators.required])
  })

  }
  onSubmit(){
console.log(this.complaintform.value)
this.data= this.complaint.complaintMail(this.complaintform.value.email,this.complaintform.value.subject)
this.alert.success("Mail Sent Successfully")
console.log(this.data)
  }

}
