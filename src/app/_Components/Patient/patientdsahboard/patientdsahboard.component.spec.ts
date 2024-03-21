import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientdsahboardComponent } from './patientdsahboard.component';

describe('PatientdsahboardComponent', () => {
  let component: PatientdsahboardComponent;
  let fixture: ComponentFixture<PatientdsahboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientdsahboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientdsahboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
