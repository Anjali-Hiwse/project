import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryglovesComponent } from './categorygloves.component';

describe('CategoryglovesComponent', () => {
  let component: CategoryglovesComponent;
  let fixture: ComponentFixture<CategoryglovesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryglovesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryglovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
