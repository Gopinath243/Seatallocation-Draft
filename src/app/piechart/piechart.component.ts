import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  // Pie
  public pieChartLabels:string[] = ['Available', 'Allocated', 'Other'];
  public pieChartData:number[] = [20, 60, 20 ];
  public pieChartType:string = 'pie';
  public pieChartColors =  [
    {
      backgroundColor: [
      'rgba(30, 169, 224, 0.8)',
      'rgba(255,165,0,0.9)',
      'rgba(139, 136, 136, 0.9)']
    }]
  // public pieChartColors =  [
  //   { // grey
  //     backgroundColor: 'rgba(148,199,166,0.2)',
  //     borderColor: 'rgba(148,159,177,1)',
  //     pointBackgroundColor: 'rgba(148,159,177,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  //   }]
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
