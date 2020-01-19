import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UstatusComponent } from './ustatus.component';

describe('UstatusComponent', () => {
  let component: UstatusComponent;
  let fixture: ComponentFixture<UstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
