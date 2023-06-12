import { Component, OnInit } from '@angular/core';

import { SpaceService } from '../../space.service';

@Component({
  selector: '.destination--container',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css'],
})
export class DestinationComponent implements OnInit  { 
  destination: any;

  constructor(private spaceService: SpaceService) { }

  ngOnInit(): void {
    this.getDestinationData()
  }

  getDestinationData(): void {
    this.spaceService.getSpaceData()
      .subscribe(spaceData => this.destination = spaceData.destinations)
  }
}
