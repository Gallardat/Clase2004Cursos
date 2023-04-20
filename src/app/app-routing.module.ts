import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCursoComponent } from './lista-curso/lista-curso.component';
import { ModificarComponent } from './modificar/modificar.component';

const routes: Routes = [
  {path:"",component:ListaCursoComponent},
  {path:"modificar/:id", component:ModificarComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
