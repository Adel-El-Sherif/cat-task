import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumOfPatientComponent } from './num-of-patient.component';

describe('NumOfPatientComponent', () => {
  let component: NumOfPatientComponent;
  let fixture: ComponentFixture<NumOfPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumOfPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumOfPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
