import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IPropertyBase } from 'src/app/models/iproperty-base';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  sellRent=1;
  properties: Array<IPropertyBase>;
  city='';
  SortbyParam = '';
  SortDirection = 'asc';

  images = ["assets/images/internal-4.jpg","assets/images/internal-5.jpg","assets/images/house9.jpg"];

  constructor(private route:ActivatedRoute,private housingService:HousingService,private config:NgbCarouselConfig) {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }




  ngOnInit() {
    console.log(this.images);
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


      this.galleryOptions = [
        {
          width: '100%',
          height: '465px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide,
          preview: true
        }
      ];


    this.galleryImages = [
      {
        small: 'assets/images/internal-1.jpg',
        medium: 'assets/images/internal-1.jpg',
        big: 'assets/images/internal-1.jpg'
      },
      {
        small: 'assets/images/internal-2.jpg',
        medium: 'assets/images/internal-2.jpg',
        big: 'assets/images/internal-2.jpg'
      },
      {
        small: 'assets/images/internal-3.jpg',
        medium: 'assets/images/internal-3.jpg',
        big: 'assets/images/internal-3.jpg'
      },
      {
        small: 'assets/images/internal-4.jpg',
        medium: 'assets/images/internal-4.jpg',
        big: 'assets/images/internal-4.jpg'
      },
      {
        small: 'assets/images/internal-5.jpg',
        medium: 'assets/images/internal-5.jpg',
        big: 'assets/images/internal-5.jpg'
      }
    ];

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


