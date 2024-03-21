import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledashBoardComponent } from './scheduledash-board.component';

describe('ScheduledashBoardComponent', () => {
  let component: ScheduledashBoardComponent;
  let fixture: ComponentFixture<ScheduledashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduledashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduledashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
