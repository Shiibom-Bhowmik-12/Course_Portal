import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesdetailsComponent } from './coursesdetails.component';

describe('CoursesdetailsComponent', () => {
  let component: CoursesdetailsComponent;
  let fixture: ComponentFixture<CoursesdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesdetailsComponent]
    });
    fixture = TestBed.createComponent(CoursesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
