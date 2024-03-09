import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleApplicationComponent } from './single-application.component';

describe('SingleApplicationComponent', () => {
  let component: SingleApplicationComponent;
  let fixture: ComponentFixture<SingleApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleApplicationComponent]
    });
    fixture = TestBed.createComponent(SingleApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
