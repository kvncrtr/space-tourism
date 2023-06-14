import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Space } from './space';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  private spaceUrl = 'api/space';

  constructor(private http: HttpClient) { }

  getSpaceData(): Observable<Space> {
    return this.http.get<Space>(this.spaceUrl)
  }; 
};
