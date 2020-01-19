import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofuserComponent } from './listofuser.component';

describe('ListofuserComponent', () => {
  let component: ListofuserComponent;
  let fixture: ComponentFixture<ListofuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
