import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgmGoogleMapComponent } from './agm-google-map.component';

describe('AgmGoogleMapComponent', () => {
  let component: AgmGoogleMapComponent;
  let fixture: ComponentFixture<AgmGoogleMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgmGoogleMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgmGoogleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
