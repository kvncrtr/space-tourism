import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { Technology } from '../../space';
import { SpaceService } from '../../space.service';

@Component({
  selector: '.tech--container',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
  @ViewChild('buttonList') buttonList!: ElementRef<HTMLElement>;

  technology: Technology[] = [];
  selectedTech: Technology | any;
  nodeList: any = {};

  constructor(private spaceService: SpaceService) { };

  ngOnInit(): void {
    this.getTechData();
  }
  
  getTechData(): void {
    this.spaceService.getSpaceData()
      .subscribe(spaceData => {
        this.technology = spaceData.technology
        this.selectedTech = spaceData.technology[0]
      }
    );
  };

  switchTech(name: string): void {
    this.technology.filter(tech => {
      if (tech.name ===name) {
        this.selectedTech = tech
        this.changeButtonState(name)
      }
    })
  }

  changeButtonState(name: string) {
    this.nodeList = this.buttonList.nativeElement.childNodes;
    this.nodeList.forEach((element: any) => {
      if (element.name === name) {
        element.classList.add('selected')
      } else {
        element.classList.remove('selected')
      };
    });
  };
}
