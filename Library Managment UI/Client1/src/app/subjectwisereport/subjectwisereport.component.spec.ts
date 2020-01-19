import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectwisereportComponent } from './subjectwisereport.component';

describe('SubjectwisereportComponent', () => {
  let component: SubjectwisereportComponent;
  let fixture: ComponentFixture<SubjectwisereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectwisereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectwisereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
