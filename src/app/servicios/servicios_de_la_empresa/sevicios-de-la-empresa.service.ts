import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiciosDeLaEmpresaService {
  constructor() {}

  obtenerServicios(): Observable<any[]> {
    // Simula datos obtenidos de un backend
    const servicios = [
      { titulo: 'Desarrollo Web', descripcion: 'Creación de sitios web modernos y responsivos', icono: '🌐' },
      { titulo: 'Soporte Técnico', descripcion: 'Resolución de problemas de hardware y software', icono: '🖥️' },
      { titulo: 'Administración de Redes', descripcion: 'Configuración y mantenimiento de redes LAN y Wi-Fi', icono: '📡' },
      { titulo: 'Ciberseguridad', descripcion: 'Protección contra amenazas digitales y auditorías de seguridad', icono: '🔒' },
      { titulo: 'Desarrollo de Software', descripcion: 'Diseño y programación de aplicaciones a medida', icono: '💾' },
      { titulo: 'Instalación de Windows 10', descripcion: 'Asesoramiento para la instalacion de sistema operativo Windows 10', icono: '🧑‍💻' },
    ];

    return of(servicios); // Simula una respuesta de backend con RxJS
  }
}
