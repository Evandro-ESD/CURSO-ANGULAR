import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quadrado } from './quadrado';

describe('Quadrado', () => {
  let component: Quadrado;
  let fixture: ComponentFixture<Quadrado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quadrado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Quadrado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
