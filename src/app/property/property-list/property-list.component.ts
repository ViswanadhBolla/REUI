import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IPropertyBase } from 'src/app/models/iproperty-base';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  sellRent=1;
  properties: Array<IPropertyBase>;
  city='';
  SortbyParam = '';
  SortDirection = 'asc';
  constructor(private route:ActivatedRoute,private housingService:HousingService) { }

  ngOnInit() {
    if(this.route.snapshot.url.toString()){

      //console.log(this.route.snapshot.url.toString());

      this.sellRent=2;
    }

    this.housingService.GetAllproperties(this.sellRent).subscribe(data=>{
      this.properties =data['data']
      },
      err =>{
        console.log('httperror: ')
        console.log(err);
      })
      }

      onCityClear(){

        this.city=''
      }

      onSortDirection(){
        if(this.SortDirection ==='desc'){
          this.SortDirection='asc';
        }
        else{
          this.SortDirection='desc';
        }
      }
  }


