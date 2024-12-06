import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SolicitudesContactosService } from '../../servicios/solicitudes-contactos/solicitudes-contactos.service';
import { TecnicoDeLaEmpresaService } from '../../servicios/tecnicos_de_la_empresa/tecnico-de-la-empresa.service';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css'],
})
export class ContactanosComponent {
  formularioForm: FormGroup;
  datosFormulario: any;
  tecnicos: any[] = []; // Aquí se almacenarán los técnicos obtenidos del backend

  constructor(
    private formBuild: FormBuilder,
    private solicitudesContactosSrv: SolicitudesContactosService,
    private tecnicoService: TecnicoDeLaEmpresaService // Servicio para obtener técnicos
  ) {
    this.formularioForm = this.formBuild.group({
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      mensaje: '',
    });
  }

  enviarDatos() {
    this.datosFormulario = this.formularioForm.value;

    console.log('Datos enviados:', this.datosFormulario);
    this.solicitudesContactosSrv.registrarFormulario(this.datosFormulario).subscribe(
      (response: any) => {
        if (response.solicitud_formulario) {
          alert('Datos guardados correctamente');
          console.log('Respuesta del servidor:', response.solicitud_formulario);
          this.formularioForm.reset();

          // Obtener técnicos después de enviar el formulario
          this.obtenerTecnicos();
        }
      },
      (error) => {
        console.error('Error al guardar los datos:', error);
      }
    );
  }

  obtenerTecnicos() {
    this.tecnicoService.obtenerTecnicos().subscribe(
      (response: any) => {
        this.tecnicos = response; // Almacena la lista de técnicos
        console.log('Técnicos obtenidos:', this.tecnicos);
      },
      (error) => {
        console.error('Error al obtener técnicos:', error);
      }
    );
  }
}
