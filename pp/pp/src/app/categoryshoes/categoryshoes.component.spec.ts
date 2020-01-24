import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryshoesComponent } from './categoryshoes.component';

describe('CategoryshoesComponent', () => {
  let component: CategoryshoesComponent;
  let fixture: ComponentFixture<CategoryshoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryshoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryshoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
