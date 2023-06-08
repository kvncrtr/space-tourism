import { Injectable } from '@angular/core';

import { Space, Destinations, Crew, Technology } from './space';
import { SPACE } from './space-data';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  constructor() { }

  getSpaceData(): Space {
    return SPACE
  };

  getDestinationData(): Destinations[] {
    return SPACE.destinations
  };

  getCrewData(): Crew[] {
    return SPACE.crew
  };

  getTechnologyData(): Technology[] {
    return SPACE.technology
  };
};
