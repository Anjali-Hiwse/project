import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryballComponent } from './categoryball.component';

describe('CategoryballComponent', () => {
  let component: CategoryballComponent;
  let fixture: ComponentFixture<CategoryballComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryballComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
