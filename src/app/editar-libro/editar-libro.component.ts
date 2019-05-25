import { Component, OnInit } from '@angular/core';
import { Swal } from '../models/swal';
import { Router } from '@angular/router';
import { LibrosService } from '../services/libros/libros.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit {
  public form = {
    title: null,
    author: null,
    isbm: null,
    description: null,
    created: null
  };
  private idLibro;

  constructor(private servicio: LibrosService, private route: ActivatedRoute, private router: Router) { }


  editar_libro() {
    this.servicio.editar_libro(this.idLibro, this.form).subscribe((data: any) => {
      Swal.correcto('Libro actualizado');
    });
  }

  get_libro() {
    this.servicio.get_libro_id(this.idLibro).subscribe((data: any) => {
      if (!data) {
        Swal.error('Este libro no existe');
        this.router.navigate(['libros']);
      }
      this.form = data;
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idLibro = params.id;
      this.get_libro();
    });

  }

}
