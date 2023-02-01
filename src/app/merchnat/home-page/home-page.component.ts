import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
declare const google:any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit,AfterViewInit {
 @ViewChild('mapElement') mapElement:any;
  map: any
  constructor() { }
  ngAfterViewInit(): void {
    this.map =new google.maps.Map(this.mapElement.nativeElement,{
     center:{lat:30.435120,lng:74.809837},
     zoom:10,
    })
    
  }

  ngOnInit(): void {
  }
 


}
