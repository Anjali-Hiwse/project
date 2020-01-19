import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemolicenseComponent } from './demolicense.component';

describe('DemolicenseComponent', () => {
  let component: DemolicenseComponent;
  let fixture: ComponentFixture<DemolicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemolicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemolicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
