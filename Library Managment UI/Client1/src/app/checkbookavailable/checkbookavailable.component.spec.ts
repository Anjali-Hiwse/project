import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckbookavailableComponent } from './checkbookavailable.component';

describe('CheckbookavailableComponent', () => {
  let component: CheckbookavailableComponent;
  let fixture: ComponentFixture<CheckbookavailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckbookavailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckbookavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
