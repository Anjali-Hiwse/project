import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueBookcopyComponent } from './issue-bookcopy.component';

describe('IssueBookcopyComponent', () => {
  let component: IssueBookcopyComponent;
  let fixture: ComponentFixture<IssueBookcopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueBookcopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueBookcopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
