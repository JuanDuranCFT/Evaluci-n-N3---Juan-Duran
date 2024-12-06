import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TecnicoDeLaEmpresaService {
  backend = 'http://localhost:4000/api/obtener-profesionales';

  constructor(private http: HttpClient) {}

  obtenerTecnicos() {
    return this.http.get(this.backend);
  }
}
