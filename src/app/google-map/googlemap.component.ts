import { Call } from '@angular/compiler';
import { AfterViewInit, Component, Injectable, OnInit } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css'],
})


export class GooglemapComponent implements OnInit {
  lat:any
  lng:any
  myDate:any
  count:any =0
address2:any
address=this.route.snapshot.paramMap.get("city")

  position= {lat: null, lng: null};
  constructor(private route:ActivatedRoute ,private router:Router) {
    this.refresh()

  }
  ngOnInit(): void {



   this.center= { lat: +localStorage.getItem("lat"), lng: +localStorage.getItem("lng") };
    this.address2=this.route.snapshot.paramMap.get("city")

    this.route.params.subscribe(
      (params)=>{
        this.address2=params['city'];
      }
    )
    if (!navigator.geolocation) {
      console.log('not supported');
    }
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos)
      localStorage.setItem('lat1',pos.coords.latitude.toString())
      localStorage.setItem('lng1',pos.coords.longitude.toString())
    });

  }

  cordinates = new google.maps.Geocoder().geocode(
    { address: this.address },
    function (results, status) {
      if (status == google.maps.GeocoderStatus.OK)
      {
        console.log('hello');
        localStorage.setItem('lat',results[0].geometry.location.toJSON().lat.toString());
        localStorage.setItem('lng',results[0].geometry.location.toJSON().lng.toString());
        console.log(typeof(results[0].geometry.location.toJSON().lat));
      }
    }
  );
 
  display: any;
  center: google.maps.LatLngLiteral = { lat: +localStorage.getItem("lat"), lng: +localStorage.getItem("lng") };
  zoom = 6;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [{lat:+localStorage.getItem("lat"),lng:+localStorage.getItem("lng")},
  {lat:+localStorage.getItem("lat1"),lng:+localStorage.getItem("lng1")}];


  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      //console.log('mouse click', this.lat);
      //this.markerPositions.push({lat:+localStorage.getItem("lat"),lng:+localStorage.getItem("lng")});
    }
  }

  refresh(){
let timerId=    setInterval(() => {
      //replaced function() by ()=>
      this.myDate= new Date();
      console.log(this.myDate);
      this.router.navigateByUrl('/maps', {skipLocationChange: false}).then(() => {
      //  console.log( this.router.navigate(["/maps"]));
    });
    },1000);
    console.log("refresh")

   console.log(this.address2)
   setTimeout(() => { clearInterval(timerId); 'stop' }, 1000);
  }


}
