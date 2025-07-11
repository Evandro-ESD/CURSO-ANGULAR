import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosComServiceComponent } from './dados-com-service.component';

describe('DadosComServiceComponent', () => {
  let component: DadosComServiceComponent;
  let fixture: ComponentFixture<DadosComServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosComServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosComServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
