import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookwiseReportComponent } from './bookwise-report.component';

describe('BookwiseReportComponent', () => {
  let component: BookwiseReportComponent;
  let fixture: ComponentFixture<BookwiseReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookwiseReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookwiseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
