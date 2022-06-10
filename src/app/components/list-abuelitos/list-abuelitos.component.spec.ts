import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAbuelitosComponent } from './list-abuelitos.component';

describe('ListAbuelitosComponent', () => {
  let component: ListAbuelitosComponent;
  let fixture: ComponentFixture<ListAbuelitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAbuelitosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAbuelitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
