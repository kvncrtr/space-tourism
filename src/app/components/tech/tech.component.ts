import { Component, OnInit } from '@angular/core';

import { Technology } from '../../space';
import { SpaceService } from '../../space.service';

@Component({
  selector: '.tech--container',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
  technology: Technology[] = []

  constructor(private spaceService: SpaceService) { }

  ngOnInit(): void {
    this.getTechData()
  }
  
  getTechData(): void {
    this.spaceService.getSpaceData()
      .subscribe(spaceData => this.technology = spaceData.technology)
  }
}
