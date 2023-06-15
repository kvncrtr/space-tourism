import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import { Crew } from '../../space';
import { SpaceService } from '../../space.service';

@Component({
  selector: '.crew--container',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit, AfterViewInit {
  @ViewChild('radioList') radioList!: ElementRef;

  crew: Crew[] = []
  currentMember: any = {};

  /* set properties to have current selected memeber set to the object that is wanted */ 
  /* then pass that object to the template value through this.crew */ 

  constructor(private spaceService: SpaceService) { }

  ngOnInit(): void {
    this.getCrewData()
  }

  ngAfterViewInit(): void {
    
  }
  
  getCrewData(): void {
    this.spaceService.getSpaceData()
      .subscribe(spaceData => {
        this.crew = spaceData.crew
        this.currentMember = spaceData.crew[0]
      })
  }

  switchMemeber(name: string): void {
    this.crew.filter(memeber => {
      console.log(memeber.name, name)
      if (memeber.name === name) {
        this.currentMember = memeber
      }
    })
  }
}
