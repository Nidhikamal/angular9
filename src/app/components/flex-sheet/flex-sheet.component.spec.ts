import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexSheetComponent } from './flex-sheet.component';

describe('FlexSheetComponent', () => {
  let component: FlexSheetComponent;
  let fixture: ComponentFixture<FlexSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
