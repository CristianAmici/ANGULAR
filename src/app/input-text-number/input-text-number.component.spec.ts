import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextNumberComponent } from './input-text-number.component';

describe('InputTextNumberComponent', () => {
  let component: InputTextNumberComponent;
  let fixture: ComponentFixture<InputTextNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTextNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
