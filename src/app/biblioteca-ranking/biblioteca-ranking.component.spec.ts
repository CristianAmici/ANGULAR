import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaRankingComponent } from './biblioteca-ranking.component';

describe('BibliotecaRankingComponent', () => {
  let component: BibliotecaRankingComponent;
  let fixture: ComponentFixture<BibliotecaRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliotecaRankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecaRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
