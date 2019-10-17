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

@NgModule({
  declarations: [
    AppComponent,
    SeatLayoutComponent,
    SeatSelectionComponent,
    SearchComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatRadioModule,
    MatDividerModule,
    RouterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
