import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosUsuarioComponent } from './libros-usuario.component';

describe('LibrosUsuarioComponent', () => {
  let component: LibrosUsuarioComponent;
  let fixture: ComponentFixture<LibrosUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrosUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
