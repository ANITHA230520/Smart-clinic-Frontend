import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfbComponent } from './addfb.component';

describe('AddfbComponent', () => {
  let component: AddfbComponent;
  let fixture: ComponentFixture<AddfbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddfbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
