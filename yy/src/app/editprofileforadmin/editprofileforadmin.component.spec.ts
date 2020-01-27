import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofileforadminComponent } from './editprofileforadmin.component';

describe('EditprofileforadminComponent', () => {
  let component: EditprofileforadminComponent;
  let fixture: ComponentFixture<EditprofileforadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprofileforadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprofileforadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
