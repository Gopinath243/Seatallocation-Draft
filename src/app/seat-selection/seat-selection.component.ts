import { Component, OnInit } from '@angular/core';
//import {FormControl, Validators} from '@angular/forms';
import { SeatService } from '../seat.service';
import { Ilocation } from '../Iseatdetails';
@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css']
})


export class SeatSelectionComponent implements OnInit {

  locations: string[] = ["SRZ-CHN","DLF-CHN","CRC-CHN","PUNE"];
  public locationdetails: Ilocation[] = [];
  buildings:any;
  floors:any;
  odcs= [];
  public locationvalue : string;
  public buildingvalue : string;
  public floorvalue : string;
  public layoutid: number;
  errorMessage = '';

//   selectedCountry: any;
//    cities = {};
//    dists= {};

// public id;

  // facility = [{
  //   id: 1, locations: 'SRZ', buildings: ['SDB1', 'SDB2'], 
  //   floors: ['6st Floor', '7st Floor', '8st Floor'],
  //   odcs: ['ODC1', 'ODC3', 'ODC5']
  // },
  // {
  //   id: 2, locations: 'DLF', cities: ['SDB10', 'SDB11'],
  //   floors: ['6st Floor', '7st Floor', '8st Floor'],
  //   odcs: ['ODC1', 'ODC3', 'ODC5']
  // },
  // {
  //   id: 3, locations: 'MRPZ', cities: ['SDB1', 'SDB2','SDB3'],
  //   floors: ['6st Floor', '7st Floor', '8st Floor'],
  //   odcs: ['ODC1', 'ODC3', 'ODC5']
  // },
  // {
  //   id: 4, locations: 'CRC', cities: ['SDB2', 'SDB3','SDB4'],
  //   floors: ['6st Floor', '7st Floor', '8st Floor'],
  //   odcs: ['ODC1', 'ODC3', 'ODC5']
  // },
  // ];

 

  onChangelocation(locationvalue) {
    this.buildings = this.locationdetails.filter(x => x.locations == locationvalue)[0].buildings;
    this.locationvalue = locationvalue;
  }
  onChangebuilding(buildingvalue) {
     this.buildingvalue = buildingvalue;
     this.floors = this.locationdetails.filter(x => x.locations == this.locationvalue)[0].buildings.filter(x => x.name == buildingvalue)[0].floors;
  }
   
  onChangefloor(floorvalue) {
    this.floorvalue = floorvalue;
    this.odcs = this.locationdetails.filter(x => x.locations == this.locationvalue)[0].buildings.
    filter(x => x.name == this.buildingvalue)[0].floors.
    filter(x => x.fname == floorvalue)[0].odcs;

 }
  
 onChangeodc(odcvalue)
 {
   this.layoutid=odcvalue;
   console.log("odcvalue"+odcvalue)
 }
  constructor(private seatservice: SeatService) { 
   
  }

  ngOnInit() {
   // this.cities = this.countries.filter(x => x.id == 1)[0].cities;

    this.seatservice.getlocation().subscribe(
      locationdetails => {
        this.locationdetails = locationdetails;        
      },
      error => this.errorMessage = <any>error
    );

  }
  

         
 

}


