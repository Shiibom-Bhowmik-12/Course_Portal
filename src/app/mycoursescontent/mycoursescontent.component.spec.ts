import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycoursescontentComponent } from './mycoursescontent.component';

describe('MycoursescontentComponent', () => {
  let component: MycoursescontentComponent;
  let fixture: ComponentFixture<MycoursescontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MycoursescontentComponent]
    });
    fixture = TestBed.createComponent(MycoursescontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
