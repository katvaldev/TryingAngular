import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbuelitoManagerComponent } from './abuelito-manager.component';

describe('AbuelitoManagerComponent', () => {
  let component: AbuelitoManagerComponent;
  let fixture: ComponentFixture<AbuelitoManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbuelitoManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbuelitoManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
