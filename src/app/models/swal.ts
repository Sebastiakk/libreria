import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable()
export class Swal {
  private static color1 = '#139873';
  private static color2 = '#ce0202';

  public static eliminar(texto = '', callback = res => { }) {
    swal({
      type: 'question',
      title: '¿Estás seguro?',
      text: texto,
      showCancelButton: true,
      confirmButtonColor: this.color2,
      cancelButtonColor: this.color1,
      confirmButtonText: '¡Sí, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      result.value = result.value ? true : false;
      if (result.value) {
        callback(result.value);
      }
    });
  }

  public static pregunta(texto = '', callback = res => { }) {
    swal({
      type: 'question',
      title: '¿Estás seguro?',
      text: texto,
      showCancelButton: true,
      confirmButtonColor: this.color1,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      result.value = result.value ? true : false;
      if (result.value) {
        callback(true);
      } else {
        callback(false);
      }
    });
  }

  public static error(texto = '') {
    swal({
      type: 'error',
      title: 'Ops..!',
      text: texto,
      confirmButtonColor: this.color1,
      confirmButtonText: 'Cerrar'
    });
  }

  public static alerta(texto = '') {
    swal({
      type: 'warning',
      title: '¡Advertencia!',
      text: texto,
      confirmButtonColor: this.color1,
      confirmButtonText: 'Aceptar'
    });
  }

  public static correcto(texto = '') {
    swal({
      type: 'success',
      title: '¡Operación exitosa!',
      text: texto,
      confirmButtonColor: this.color1,
      confirmButtonText: 'Aceptar'
    });
  }

  public static informacion(texto = '') {
    swal({
      type: 'info',
      title: '¡Información!',
      text: texto,
      confirmButtonColor: this.color1,
      confirmButtonText: 'Aceptar'
    });
  }

  public static toast_correcto(texto = '') {
    swal({
      position: 'top-end',
      type: 'success',
      title: texto,
      showConfirmButton: false,
      timer: 1500
    });
  }

  public static toast_alerta(texto = '') {
    swal({
      position: 'top-end',
      type: 'warning',
      title: texto,
      showConfirmButton: false,
      timer: 1500
    });
  }

  public static toast_error(texto = '') {
    swal({
      position: 'top-end',
      type: 'error',
      title: texto,
      showConfirmButton: false,
      timer: 1500
    });
  }

  public static toast_informacion(texto = '') {
    swal({
      position: 'top-end',
      type: 'info',
      title: texto,
      showConfirmButton: false,
      timer: 1500
    });
  }
}
