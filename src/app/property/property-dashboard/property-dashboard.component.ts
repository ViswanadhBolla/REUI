import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/models/iproperty-base';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-dashboard',
  templateUrl: './property-dashboard.component.html',
  styleUrls: ['./property-dashboard.component.css']
})
export class PropertyDashboardComponent implements OnInit {

  constructor(private route:ActivatedRoute, private housingService:HousingService) { }

  properties: IPropertyBase[];
  postedByID: number;
  ngOnInit(): void {
    this.postedByID = this.route.snapshot.params['id']
    this.housingService.GetPropertyByPostedById(this.postedByID).subscribe(
      data=>{
        this.properties=data['data']
        console.log(this.properties);

      }
    )
  }

}
