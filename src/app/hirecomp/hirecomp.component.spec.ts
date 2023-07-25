import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HirecompComponent } from './hirecomp.component';

describe('HirecompComponent', () => {
  let component: HirecompComponent;
  let fixture: ComponentFixture<HirecompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HirecompComponent]
    });
    fixture = TestBed.createComponent(HirecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
