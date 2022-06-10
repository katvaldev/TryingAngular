import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAbuelitoComponent } from './add-abuelito.component';

describe('AddAbuelitoComponent', () => {
  let component: AddAbuelitoComponent;
  let fixture: ComponentFixture<AddAbuelitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAbuelitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAbuelitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
