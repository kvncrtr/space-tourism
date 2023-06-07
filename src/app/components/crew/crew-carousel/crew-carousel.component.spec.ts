import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewCarouselComponent } from './crew-carousel.component';

describe('CrewCarouselComponent', () => {
  let component: CrewCarouselComponent;
  let fixture: ComponentFixture<CrewCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
