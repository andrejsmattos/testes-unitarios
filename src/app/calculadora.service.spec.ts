import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
    it('deve somar dois números corretamente', () => {
      const resultado = service.somar(5, 2);
      expect(resultado).toBe(7);
    });

  it('deve subtrair dois números corretamente', () => {
    const resultado = service.subtrair(5, 2);
    expect(resultado).toBe(3);
  });

  it('deve multiplicar dois números corretamente', () => {
    const resultado = service.multiplicar(5, 2);
    expect(resultado).toBe(10);
  });

  it('deve dividir dois números corretamente', () => {
    const resultado = service.dividir(10, 2);
    expect(resultado).toBe(5);
  });

  it('deve lançar uma exceção ao tentar dividir por zero', () => {
    expect(() => service.dividir(10, 0))
      .toThrow();
  });
});
