import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofilecustComponent } from './editprofilecust.component';

describe('EditprofilecustComponent', () => {
  let component: EditprofilecustComponent;
  let fixture: ComponentFixture<EditprofilecustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprofilecustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprofilecustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
