import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveclassesComponent } from './liveclasses.component';

describe('LiveclassesComponent', () => {
  let component: LiveclassesComponent;
  let fixture: ComponentFixture<LiveclassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveclassesComponent]
    });
    fixture = TestBed.createComponent(LiveclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
