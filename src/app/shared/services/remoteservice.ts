import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import {map,catchError} from 'rxjs/operators';
import { from, Observable, throwError } from "rxjs";

@Injectable()
export class remoteService {
    url='http://127.0.0.1:5000/'
    constructor(private http: HttpClient) { }

    

   get(method){
     return this.http.get(method);
   }

   post(method,params?:any):Observable<any> {
    const headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Content-Type', 'application/json');
     return this.http.post(this.url+method,params,  { headers: headers }).
     pipe(
         catchError(this.handleError)
        );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  extractData(res: any) {
    return res.json() || {};
 }

 


}