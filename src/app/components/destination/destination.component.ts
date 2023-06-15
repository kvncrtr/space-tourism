import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import { SpaceService } from '../../space.service';
import { Destinations } from '../../space';

@Component({
  selector: '.destination--container',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css'],
})
export class DestinationComponent implements OnInit, AfterViewInit  {
  @ViewChild('destinationBar') destinationBar!: ElementRef;
  
  destinationData: Destinations[]  = [];
  selectedPlanet: Destinations | any;
  navList: any = {};

  constructor (
      private spaceService: SpaceService,
      private elementRef: ElementRef
    ) { }

  ngOnInit(): void {
    this.getDestinationData()
  }

  ngAfterViewInit(): void {
    this.setSelectedElement();
  }

  getDestinationData(): void {
    this.spaceService.getSpaceData()
      .subscribe(spaceData => {
        this.destinationData = spaceData.destinations
        this.selectedPlanet = spaceData.destinations[0]
      });
  };

  handleNewData(placeName: string): void {
   this.destinationData.filter(place => {
      if (place.name === placeName) {
        this.selectedPlanet = place
        this.setSelectedElement()
      }
    })
  }

  setSelectedElement(): void {
    this.navList = this.destinationBar.nativeElement.childNodes
    this.selectedPlanet.name
    this.navList.forEach((node: any) => {
      if(node.innerHTML) {
        if (node.innerHTML === this.selectedPlanet.name) {
          node.classList.add('selected')
        }
        else {
          node.classList.remove('selected')
        }
      }
    })
    
  } 
  
}
