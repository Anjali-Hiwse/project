import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistofissuedbooksComponent } from './userlistofissuedbooks.component';

describe('UserlistofissuedbooksComponent', () => {
  let component: UserlistofissuedbooksComponent;
  let fixture: ComponentFixture<UserlistofissuedbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlistofissuedbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistofissuedbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
