import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducatorsComponent } from './educators.component';

describe('EducatorsComponent', () => {
  let component: EducatorsComponent;
  let fixture: ComponentFixture<EducatorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducatorsComponent]
    });
    fixture = TestBed.createComponent(EducatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
