import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPropertyBase } from 'src/app/models/iproperty-base';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  @Input() property:IPropertyBase;

  public propertyId:number;
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.propertyId = +this.route.snapshot.params['id'];
console.log( "hello",this.property)
    this.route.params.subscribe(
      (params)=>{
        this.propertyId=+params['id'];
      }
    )

  }

  onSelectNext(){
    this.propertyId += 1
    this.router.navigate(['property-details',this.propertyId]);

  }

}
