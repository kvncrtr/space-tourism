import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Space } from './space';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  data: any;

  private spaceUrl = 'api/data';

  constructor(private http: HttpClient) { }

  getSpaceData(): Observable<Space> {
    return this.http.get<Space>(this.spaceUrl)
    .pipe(
      catchError(this.handleError<Space>('getSpaceData'))
    );
  }; 

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {  
      console.error(error);
      alert(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
};
