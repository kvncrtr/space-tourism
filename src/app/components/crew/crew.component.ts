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

  constructor(private spaceService: SpaceService) { }

  ngOnInit(): void {
    this.getCrewData
  }
  
  getCrewData(): void {
    this.crew = this.spaceService.getCrewData()
  }
}
