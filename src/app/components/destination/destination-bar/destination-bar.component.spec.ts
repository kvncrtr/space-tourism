import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsBarComponent } from './destination-bar.component';

describe('DestinationsBarComponent', () => {
  let component: DestinationsBarComponent;
  let fixture: ComponentFixture<DestinationsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationsBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
