import { Component, OnInit, ElementRef, HostListener, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: '.navbar--container',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('navList') navList!: ElementRef;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = window.innerWidth;
    this.toggleViewType(innerWidth)
  }

  screenWidth: number;
  selectedPage: any;
  nodeList: any; 
  
  constructor(private elementRef: ElementRef) { 
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.changeView()
  }
  
  ngAfterViewInit(): void {
    this.nodeList = this.navList.nativeElement.childNodes
    this.setCurrentPage()
  }
  
  toggleNav(): void {
    if (this.screenWidth < 768) {
      this.elementRef.nativeElement.children[1].classList.toggle('inactive')
    } else if (this.screenWidth > 768) {
      this.elementRef.nativeElement.children[1].classList.remove('inactive')
    }
  }

  toggleViewType(width: number): void {
    if (width > 768) {
      this.screenWidth = 768
      this.changeView()
    } else {
      this.screenWidth = 375
      this.elementRef.nativeElement.children[1].classList.add('inactive')
    }
  }

  changeView(): void {
    if (this.screenWidth >= 768) {
      this.elementRef.nativeElement.children[1].classList.remove('inactive')
    } else if (this.screenWidth < 768) {
      this.elementRef.nativeElement.children[1].classList.add('inactive')
    }
  }

  setCurrentPage(): void {
    this.nodeList.forEach((element: any) => {
      element.classList.forEach((index: any) => {
        if (index == 'selected') {
          this.selectedPage = element.outerText
          this.setSelectedStyle()
        }
      })
    })
  }
  
  setSelectedStyle(): void {
    console.log(this.selectedPage)
    
  }
}
