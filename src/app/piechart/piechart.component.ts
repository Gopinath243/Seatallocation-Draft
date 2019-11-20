import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  // Pie

  public pieChartLabels:string[] = ['Available', 'Allocated', 'Other'];
  public pieChartData:number[] = [25, 60, 15 ];
  public pieChartDataChennai:number[] = [10, 80, 10 ];
  public pieChartDataPune:number[] = [30, 60, 10 ];
  public pieChartDataBanglore:number[] = [20, 65, 15 ];
  
  public pieChartType:string = 'pie';
  public pieChartColors =  [
    {
      
      backgroundColor: [
      '#00ff99',
      '#99ddff',
      '#ffcc80']
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
