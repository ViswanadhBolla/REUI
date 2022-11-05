import { AfterViewInit, Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css'],
})


export class GooglemapComponent implements OnInit {
lat =1
  lng: any;
  position= {lat: null, lng: null};
  constructor() {}
  ngOnInit(): void {
    if (!navigator.geolocation) {
      console.log('not supported');
    }
    navigator.geolocation.getCurrentPosition((pos) => {
      // console.log(pos)
      //  this.lat = pos.coords.latitude;
      //this.lng =pos.coords.longitude;
      //console.log(this.lat)
      //console.log(this.lng)
    });
  }

  cordinates = new google.maps.Geocoder().geocode(
    { address: 'delhi' },
    function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        console.log('hello');
        localStorage.setItem('lat',results[0].geometry.location.toJSON().lat.toString())
        localStorage.setItem('lng',results[0].geometry.location.toJSON().lng.toString())
        console.log(typeof(results[0].geometry.location.toJSON().lat));
      }
    }
  );

  display: any;
  center: google.maps.LatLngLiteral = { lat: 14, lng: 78 };
  zoom = 6;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];
  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      console.log('mouse click', this.lat);

      this.markerPositions.push({lat:+localStorage.getItem("lat"),lng:+localStorage.getItem("lng")});
    }
  }
}
