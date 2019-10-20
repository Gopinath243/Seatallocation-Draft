import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SeatLayoutComponent } from './seat-layout/seat-layout.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { SearchComponent } from './search/search.component';
//import { SeatService } from './seat.service';
import { HttpClientModule } from '@angular/common/http';
import {MatRadioModule} from '@angular/material'
import {MatDividerModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import { ChartsModule } from 'ng2-charts';
//import { PieChartComponent } from './piechart/piechart';
import { PiechartComponent } from './piechart/piechart.component';


@NgModule({
  declarations: [
    AppComponent,
    SeatLayoutComponent,
    SeatSelectionComponent,
    SearchComponent,
    PiechartComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatRadioModule,
    MatDividerModule,
    RouterModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
