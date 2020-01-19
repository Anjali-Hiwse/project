import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtoofficeComponent } from './rtooffice.component';

describe('RtoofficeComponent', () => {
  let component: RtoofficeComponent;
  let fixture: ComponentFixture<RtoofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtoofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtoofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
