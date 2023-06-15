import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Crew } from '../../space';
import { SpaceService } from '../../space.service';

@Component({
  selector: '.crew--container',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  @ViewChild('radioList') radioList!: ElementRef;

  crew: Crew[] = [];
  currentMember: any = {};

  constructor(private spaceService: SpaceService) { }

  ngOnInit(): void {
    this.getCrewData()
  };
  
  getCrewData(): void {
    this.spaceService.getSpaceData()
      .subscribe(spaceData => {
        this.crew = spaceData.crew
        this.currentMember = spaceData.crew[0]
      })
  };

  switchMemeber(name: string): void {
    this.crew.filter(memeber => {
      if (memeber.name === name) {
        this.currentMember = memeber
      }
    })
  };

}
