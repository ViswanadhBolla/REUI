import { Component, Input, OnInit } from '@angular/core';
import { Property } from 'src/app/models/Property';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {


  constructor(private photoService:PhotoService) { }
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
  }

  onDelete(publicId:string){
    this.photoService.deletePhoto(this.property.id,publicId)
  }

  setMainPhoto(publicId:string){

    this.photoService.setMainPhoto(this.property.id,publicId)
  }

}
