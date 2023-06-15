import { Component, OnInit } from '@angular/core';

import { SpaceService } from '../../space.service';
import { InMemoryDataService } from 'src/app/in-memory-data.service';
import { Destinations } from 'src/app/space';

@Component({
  selector: '.destination--container',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css'],
})
export class DestinationComponent implements OnInit  { 
  destinationData: Destinations[]  = [];

  selectedPlanet: any;

  constructor(private spaceService: SpaceService) { }

  ngOnInit(): void {
    this.getDestinationData()
  }

  getDestinationData(): void {
    this.spaceService.getSpaceData()
      .subscribe(spaceData => {
        this.destinationData = spaceData.destinations
        this.selectedPlanet = spaceData.destinations[0]
      });
  };

  handleClick(placeName: string): void {
   this.destinationData.filter(place => {
      if (place.name === placeName) {
        this.selectedPlanet = place
      }
    })
  }
  
}
