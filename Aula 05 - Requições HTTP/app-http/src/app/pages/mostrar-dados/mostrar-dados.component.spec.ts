import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDadosComponent } from './mostrar-dados.component';

describe('MostrarDadosComponent', () => {
  let component: MostrarDadosComponent;
  let fixture: ComponentFixture<MostrarDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarDadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
