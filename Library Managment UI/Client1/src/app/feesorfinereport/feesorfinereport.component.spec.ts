import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesorfinereportComponent } from './feesorfinereport.component';

describe('FeesorfinereportComponent', () => {
  let component: FeesorfinereportComponent;
  let fixture: ComponentFixture<FeesorfinereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesorfinereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesorfinereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
