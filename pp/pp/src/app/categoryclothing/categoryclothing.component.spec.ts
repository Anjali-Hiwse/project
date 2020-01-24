import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryclothingComponent } from './categoryclothing.component';

describe('CategoryclothingComponent', () => {
  let component: CategoryclothingComponent;
  let fixture: ComponentFixture<CategoryclothingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryclothingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryclothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
