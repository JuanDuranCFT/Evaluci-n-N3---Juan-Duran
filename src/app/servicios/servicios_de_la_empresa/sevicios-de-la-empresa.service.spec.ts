import { TestBed } from '@angular/core/testing';

import { ServiciosDeLaEmpresaService } from './sevicios-de-la-empresa.service';

describe('SeviciosDeLaEmpresaService', () => {
  let service: ServiciosDeLaEmpresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosDeLaEmpresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
