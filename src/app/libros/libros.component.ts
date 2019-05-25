import { Component, OnInit } from '@angular/core';
import { Swal } from '../models/swal';
import { LibrosService } from '../services/libros/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public listHead = ['Código ISBM', 'Título', 'Autor', 'Descripción', 'Fecha de creación', 'Opciones'];
  public listBody = new Array();

  public form = {
    title: null,
    author: null,
    isbm: null,
    description: null,
    created: null
  };

  constructor(private servicio: LibrosService) {
  }

  guardar() {
    this.servicio.guardar_libro(this.form).subscribe((data: any) => {
      Swal.correcto('Registro exitoso');
      this.get_libros();
    });
  }

  get_libros() {
    this.servicio.get_libros().subscribe((data: any) => {
      this.listBody = data;
    });
  }

  eliminar(id) {
    this.servicio.eliminar_libro(id).subscribe((data: any) => {
      this.get_libros();
    });
  }

  ngOnInit() {
    this.get_libros();
  }

}
