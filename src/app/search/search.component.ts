import { Component, OnInit } from '@angular/core';

import { SeatService } from '../seat.service';
import { Iseat } from '../Iseatdetails';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  _listFilter = '';
  Filtervalue = '';
  errorMessage = '';

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  set Filter(value: string) {
    console.log("hi"+value);
    this.Filtervalue = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
     }

  filteredProducts: Iseat[] = [];
  products: Iseat[] = [];
 
  constructor(private seatservice: SeatService) { 
 
  }

  performFilter(filterBy: string): Iseat[] {
    filterBy = filterBy.toLocaleLowerCase();

   
  console.log(this.Filtervalue);
   	switch (this.Filtervalue) {
  	case 'Seat ID':
      return this.products.filter((product: Iseat) =>
      product.seatID.toLocaleLowerCase().indexOf(filterBy) !== -1);
    		break;
  	case 'Assert User ID':
      return this.products.filter((product: Iseat) =>
      product.assertUserid.toLocaleLowerCase().indexOf(filterBy) !== -1);
    		break;
  	case 'Assert Username':
    	return this.products.filter((product: Iseat) =>
      product.assertUsername.toLocaleLowerCase().indexOf(filterBy) !== -1);
    		break;
  	case 'Seat Type':
    		return this.products.filter((product: Iseat) =>
      product.seatType.toLocaleLowerCase().indexOf(filterBy) !== -1);
        break;
    case 'Team':
    		return this.products.filter((product: Iseat) =>
      product.team.toLocaleLowerCase().indexOf(filterBy) !== -1);
    		break;
  }
  
    
  }

  ngOnInit(): void {
    this.seatservice.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error
    );
  }
}

