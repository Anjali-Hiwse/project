import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewCopyComponent } from './addnew-copy.component';

describe('AddnewCopyComponent', () => {
  let component: AddnewCopyComponent;
  let fixture: ComponentFixture<AddnewCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
