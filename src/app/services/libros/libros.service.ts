import { Injectable } from '@angular/core';
import { HttpClientService } from '../http';
import { API } from '../../constantes/api';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http: HttpClientService) { }

  get_libros() {
    return this.http.get(API.url + 'book/');
  }
  
  get_libro_id(id) {
    return this.http.get(API.url + 'book/' + id);
  }

  guardar_libro(data) {
    return this.http.post(API.url + 'book/', data);
  }

  editar_libro(id, data) {
    return this.http.put(API.url + 'book/' + id, data);
  }

  eliminar_libro(id) {
    return this.http.delete(API.url + 'book/' + id);
  }

}
