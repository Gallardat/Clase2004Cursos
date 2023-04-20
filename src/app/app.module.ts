import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoServicioService } from './curso-servicio.service';
import { ModificarComponent } from './modificar/modificar.component';
import { FormsModule } from '@angular/forms';
import { ListaCursoComponent } from './lista-curso/lista-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    ModificarComponent,
    ListaCursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CursoServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
