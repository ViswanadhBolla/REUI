import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from 'src/app/models/Property';
import { AlertifyService } from 'src/app/services/alertify.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {


  constructor(private photoService:PhotoService, private router:Router , private alertify: AlertifyService) { }
  @Input() property:Property;

  photo:File=null;

  ngOnInit(): void {

  }


  readPhoto(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.photo=event.target.files[0]
      console.log(this.photo)
    }
  }

  onSubmit(){
    var formData = new FormData();
    formData.append('file',this.photo,this.photo.name);
    console.log(this.property.id);

    console.log(formData)
    this.photoService.addPhoto(this.property.id,formData)
    this.alertify.success('Added successfully')

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/property-detail/'+this.property.id]);
  });
  }

  onDelete(publicId:string){
    this.photoService.deletePhoto(this.property.id,publicId)
    this.alertify.success('photo deleted')

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/property-detail/'+this.property.id]);
  });
  }

  setMainPhoto(publicId:string){

    this.photoService.setMainPhoto(this.property.id,publicId)

    this.alertify.success('set main photo successfully')



     this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/property-detail/'+this.property.id]);
  });

  }

}
