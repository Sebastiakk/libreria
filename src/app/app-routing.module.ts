import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibrosComponent } from './libros/libros.component';
import { EditarLibroComponent } from './editar-libro/editar-libro.component';

const routes: Routes = [
  { path: 'libros', component: LibrosComponent },
  { path: 'libro/:id', component: EditarLibroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
