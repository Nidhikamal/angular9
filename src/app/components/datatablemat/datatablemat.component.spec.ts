import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatablematComponent } from './datatablemat.component';

describe('DatatablematComponent', () => {
  let component: DatatablematComponent;
  let fixture: ComponentFixture<DatatablematComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatablematComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatablematComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
