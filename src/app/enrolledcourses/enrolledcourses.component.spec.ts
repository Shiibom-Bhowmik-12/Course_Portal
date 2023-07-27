import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledcoursesComponent } from './enrolledcourses.component';

describe('EnrolledcoursesComponent', () => {
  let component: EnrolledcoursesComponent;
  let fixture: ComponentFixture<EnrolledcoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrolledcoursesComponent]
    });
    fixture = TestBed.createComponent(EnrolledcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
