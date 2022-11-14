import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { Property } from 'src/app/models/Property';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  // @Input() property:IPropertyBase;


  constructor(private route:ActivatedRoute, private router:Router,
    private housingService : HousingService, private sanitizer: DomSanitizer) { }

    public propertyId:number;
    public mainPhotoUrl: string = null;
    property= new Property();
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    loggedinUserID: string = null;
    // url="http://localhost:4200/user/profile/"+this.property.postedBy;
    // urlSafe:SafeResourceUrl;


  ngOnInit(): void {
    this.propertyId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(
      (data:Property) => {
        // console.log(data)
        this.property = data['prp']['data']
        console.log(this.property.photos)
        this.loggedinUserID=localStorage.getItem('tokenId')
        // console.log(this.property);

      }
    )

    // this.urlSafe=this.sanitizer.bypassSecurityTrustResourceUrl(this.url)

    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: true
      }
    ];

    this.galleryImages = this.getPropertyPhotos();


  }

  getPropertyPhotos(): NgxGalleryImage[]{
    const photoUrls:NgxGalleryImage[] =[];
    console.log(this.property.photos);

    for(const photo of this.property.photos){
      if(photo.isPrimary) {this.mainPhotoUrl = photo.imageUrl}
      else{
      photoUrls.push({
        small: photo.imageUrl,
        medium: photo.imageUrl,
        big: photo.imageUrl
      }

      )
    }
  }
    return photoUrls;

  }

  isOwner(){

    if(+this.loggedinUserID===this.property.postedBy){
      return true

    }
    return false
  }

  deleteProperty(){
    this.housingService.deleteProperty(this.property.id).subscribe(
      data=>{
        console.log(data);

      },
      error=>{
        console.log(error);

      }
    )

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/dashboard/'+this.loggedinUserID]);
  });

  }


}
