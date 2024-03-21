import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctordashBoardComponent } from './doctordash-board.component';

describe('DoctordashBoardComponent', () => {
  let component: DoctordashBoardComponent;
  let fixture: ComponentFixture<DoctordashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctordashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctordashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
