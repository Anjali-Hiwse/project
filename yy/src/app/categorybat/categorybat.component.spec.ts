import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorybatComponent } from './categorybat.component';

describe('CategorybatComponent', () => {
  let component: CategorybatComponent;
  let fixture: ComponentFixture<CategorybatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorybatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorybatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
