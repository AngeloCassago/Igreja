import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Visitante } from './visitante';

describe('Visitante', () => {
  let component: Visitante;
  let fixture: ComponentFixture<Visitante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Visitante],
    }).compileComponents();

    fixture = TestBed.createComponent(Visitante);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
