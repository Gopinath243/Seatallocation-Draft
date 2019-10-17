import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Iseat } from './Iseatdetails';
import { Iseatlayout } from './Iseatdetails';
import { Ilocation } from './Iseatdetails';

@Injectable({
  providedIn: 'root'
})
export class SeatService {
   private productUrl = '../api/seatdb.json';
   private dbUrl = '../api/db.json';
   private locationUrl = '../api/locationdetails.json';
   
   

 // private productUrl = 'C:/Users/595950/Documents/angular-testing/src/app/api/seatdb.json';
  constructor(private http: HttpClient) { }

 
  getProducts(): Observable<Iseat[]> {
    console.log('sevice getProducts called');
    return this.http.get<Iseat[]>(this.productUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getSeat(): Observable<Iseatlayout[]> {
    console.log('sevice getSeat called');
    return this.http.get<Iseatlayout[]>(this.dbUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getlocation(): Observable<Ilocation[]> {
    console.log('sevice getlocation called');
    return this.http.get<Ilocation[]>(this.locationUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

//   getProduct(id: number): Observable<Iseat | undefined> {
//     return this.getProducts().pipe(
//       map((products: Iseat[]) => products.find(p => p.productId === id))
//     );
//   }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
