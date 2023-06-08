import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '.destination--bar-container',
  templateUrl: './destination-bar.component.html',
  styleUrls: ['./destination-bar.component.css']
})
export class DestinationBarComponent implements OnInit {
  @Input() childDestination: any;

  constructor() { }

  ngOnInit(): void {

  }
}
