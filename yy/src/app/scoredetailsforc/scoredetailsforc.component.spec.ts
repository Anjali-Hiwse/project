import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoredetailsforcComponent } from './scoredetailsforc.component';

describe('ScoredetailsforcComponent', () => {
  let component: ScoredetailsforcComponent;
  let fixture: ComponentFixture<ScoredetailsforcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoredetailsforcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoredetailsforcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
