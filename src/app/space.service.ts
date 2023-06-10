import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Space } from './space';
import { SPACE } from './space-data';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  constructor() { }

  getSpaceData(): Observable<Space> {
    const space = of(SPACE);
    return space
  }; 
};
