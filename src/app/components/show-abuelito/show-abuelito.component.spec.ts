import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAbuelitoComponent } from './show-abuelito.component';

describe('ShowAbuelitoComponent', () => {
  let component: ShowAbuelitoComponent;
  let fixture: ComponentFixture<ShowAbuelitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAbuelitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAbuelitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
