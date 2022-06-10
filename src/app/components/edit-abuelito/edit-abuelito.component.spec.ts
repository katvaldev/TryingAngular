import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAbuelitoComponent } from './edit-abuelito.component';

describe('EditAbuelitoComponent', () => {
  let component: EditAbuelitoComponent;
  let fixture: ComponentFixture<EditAbuelitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAbuelitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAbuelitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
