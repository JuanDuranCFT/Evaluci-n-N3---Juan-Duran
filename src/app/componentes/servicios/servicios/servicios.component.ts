import { Component, OnInit } from '@angular/core';
import { ServiciosDeLaEmpresaService } from '../../../servicios/servicios_de_la_empresa/sevicios-de-la-empresa.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  servicios: any[] = [];

  constructor(private serviciosService: ServiciosDeLaEmpresaService) {}

  ngOnInit(): void {
    this.cargarServicios();
  }

  cargarServicios() {
    this.serviciosService.obtenerServicios().subscribe(
      (data) => {
        this.servicios = data;
        console.log('Servicios obtenidos:', this.servicios);
      },
      (error) => {
        console.error('Error al obtener servicios:', error);
      }
    );
  }
}
