import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpaymentHistoryComponent } from './userpayment-history.component';

describe('UserpaymentHistoryComponent', () => {
  let component: UserpaymentHistoryComponent;
  let fixture: ComponentFixture<UserpaymentHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpaymentHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpaymentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
