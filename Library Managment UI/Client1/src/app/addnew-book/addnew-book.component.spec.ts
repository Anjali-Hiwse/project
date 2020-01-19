import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewBookComponent } from './addnew-book.component';

describe('AddnewBookComponent', () => {
  let component: AddnewBookComponent;
  let fixture: ComponentFixture<AddnewBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
