import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumOfPatientPerProductComponent } from './num-of-patient-per-product.component';

describe('NumOfPatientPerProductComponent', () => {
  let component: NumOfPatientPerProductComponent;
  let fixture: ComponentFixture<NumOfPatientPerProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumOfPatientPerProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumOfPatientPerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
