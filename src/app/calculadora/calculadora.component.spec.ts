import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CalculadoraComponent,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve verificar se "somar()" está somando corretamente', () => {
    component.num1 = 5;
    component.num2 = 2;
    component.somar();
    expect(component.resultado).toBe(7);
  });

  it('deve verificar se ngModel está atualizando variáveis corretamente', () => {	
    component.num1 = 295;
    component.num2 = 217;
    expect(component.num1).toBe(295);
    expect(component.num2).toBe(217);
  });

});
