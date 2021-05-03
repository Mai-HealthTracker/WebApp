import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealTrackerItemComponent } from './meal-tracker-item.component';

describe('MealTrackerItemComponent', () => {
  let component: MealTrackerItemComponent;
  let fixture: ComponentFixture<MealTrackerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealTrackerItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealTrackerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
