import { Component, OnInit } from '@angular/core';

import { Crew } from '../../space';
import { SpaceService } from '../../space.service';

@Component({
  selector: '.crew--container',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  crew: Crew[] = []

  /* set properties to have current selected memeber set to the object that is wanted */ 
  /* then pass that object to the template value through this.crew */ 

  constructor(private spaceService: SpaceService) { }

  ngOnInit(): void {
    this.getCrewData()
  }
  
  getCrewData(): void {
    this.spaceService.getSpaceData()
      .subscribe(spaceData => this.crew = spaceData.crew)
  }
}
