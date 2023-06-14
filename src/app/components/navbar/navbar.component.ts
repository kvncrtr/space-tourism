import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: '.navbar--container',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {

  }
  
  toggleNav(): void {
    this.elementRef.nativeElement.children[1].classList.toggle('inactive')
  }
}
