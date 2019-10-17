import { Component, OnInit, Input } from '@angular/core';

import { SeatService } from '../seat.service';
import { Iseat } from '../Iseatdetails';
import { Iseatlayout } from '../Iseatdetails';

@Component({
  selector: 'app-seat-layout',
  templateUrl: './seat-layout.component.html',
  styleUrls: ['./seat-layout.component.css']
})
export class SeatLayoutComponent implements OnInit {

   @Input() layoutid: number;
  
  managercubicalcount = [];
  baycount = [];
  conf_room_count = [];

  products: Iseat[] = [];
  public seatdetails: Iseatlayout[] = [];
  public filterseatdetails: Iseatlayout[] = [];
  myVar: string;
  myVarr;
  errorMessage = '';
   
  //Bay_Val1: string[];


  // odclayout = [{
  //   id: 0, name: 'ODC3', managercubicalid: ['M001', 'M002', 'M003', 'M004', 'M005', 'M006'],
  //   bayid: ['Bay1', 'Bay2', 'Bay3', 'Bay4', 'Bay5', 'Bay6', 'Bay7'],
  //   BayVal: [{ id: 0, Bayuser: ['name1', 'name2'] }, { id: 1, Bayuser: ['name3', 'name4'] }
  //     , { id: 2, Bayuser: ['name5', 'name6'] }, { id: 3, Bayuser: ['name7', 'name8'] }
  //     , { id: 4, Bayuser: ['name9', 'name10'] }, { id: 5, Bayuser: ['name11', 'name12'] }
  //     , { id: 6, Bayuser: ['name13', 'name14'] }],
  //   odcs: ['ODC1', 'ODC3', 'ODC5'],
  //   confroom: ["Room1", "Room2"]
  // },
  // {
  //   id: 1, name: 'DLF', managercubicalid: ['M001', 'M002', 'M003', 'M004', 'M005', 'M007'],
  //   dists: ['3st Floor', '4st Floor', '5st Floor'],
  //   odcs: ['ODC3', 'ODC4', 'ODC5'],
  //   confroom: ["Room3", "Room4"]
  // }]

  constructor(private seatservice: SeatService) {
  }

  ngOnInit() {
    
    let counter: number = 0;

    this.seatservice.getSeat().subscribe(
      seatdetails => {
        this.seatdetails = seatdetails;
       console.log("layoutid"+this.layoutid);
        //this.filterseatdetails = this.seatdetails;

       // console.log ('seatdetails:', seatdetails.filter(x => x.id == 0)[0].managercubicalid);
        this.managercubicalcount = this.seatdetails.filter(x => x.id == this.layoutid)[0].managercubicalid;
      //  console.log ('baydetails:', seatdetails.filter(x => x.id == 0)[0]);
        this.baycount = this.seatdetails.filter(x => x.id == this.layoutid)[0].bayVal;

        this.conf_room_count = this.seatdetails.filter(x => x.id == this.layoutid)[0].confroom;
      //   for (counter = 0; counter < this.seatdetails.length; counter++) {
      //     this.location.push(this.seatdetails.filter(x => x.id == counter)[0].location);
      // console.log (this.seatdetails.filter(x => x.id == counter)[0].location);
      //   }
      },
      error => this.errorMessage = <any>error
    );

    //this.managercubicalcount = this.seatdetails.filter(x => x.id == 1)[0].managercubicalid;

    // this.managercubicalcount = this.odclayout.filter(x => x.id == 1)[0].managercubicalid;
    // this.baycount = this.odclayout.filter(x => x.id == 1)[0].bayid;
    // this.conf_room_count = this.odclayout.filter(x => x.id == 1)[0].confroom;

    // let baycounter: number = 0;
    // let cubecounter: number = 0;
    // let count: number = 0;
    // let Bay_Val: string[][];
    // let Bay_Val1: string[];
    // let Bay_Val2: string[];
    // let Bay_Val3: string[];

    // for (baycounter = 0; baycounter < this.baycount.length; baycounter++) {
    //   // this.Bay_Val[0][baycounter] =  this.odclayout.filter(x => x.id == 1)[0].BayVal.filter(x => x.id == 1)[0].Bay1[baycounter];
    //   // console.log(this.Bay_Val[0][baycounter]);
    //   // this.Bay_Val1 =  this.odclayout.filter(x => x.id == 1)[0].BayVal.filter(x => x.id == 1)[0].Bay1;
    //   this.Bay_Val1 = this.odclayout.filter(x => x.id == 1)[0].BayVal.filter(x => x.id == baycounter)[0].Bayuser;
    //   //  this.Bay_Val2.push(this.Bay_Val1[0]);
    //   for (cubecounter = 0; cubecounter < this.Bay_Val1.length; cubecounter++) {

    //     console.log(this.Bay_Val1[cubecounter]);
    //     console.log(baycounter,cubecounter);
    //    //  Bay_Val[baycounter][cubecounter] = "1"; 
    //   }
    // }
    // console.log(this.Bay_Val1);
 
    
  }

}
