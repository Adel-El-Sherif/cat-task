import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserImagComponent } from './user-imag.component';

describe('UserImagComponent', () => {
  let component: UserImagComponent;
  let fixture: ComponentFixture<UserImagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserImagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserImagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
