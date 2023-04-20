import { Component } from '@angular/core';
import { Curso,Nivel } from '../Curso';
import { CursoServicioService } from '../curso-servicio.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent {

  nuevoId:number;
  nuevoNombre: string;
  nuevaDuracion:number;
  nuevoNivel: Nivel;
  acc: number=0
  constructor(private ruta: Router, private activarRuta: ActivatedRoute,private miServicio: CursoServicioService){
    this.nuevoId=this.activarRuta.snapshot.params["id"]
    this.nuevoNombre=""
    this.nuevaDuracion=0
    this.nuevoNivel=Nivel.avanzado
    this.curs=this.miServicio.curso
    this.acc=parseInt(this.activarRuta.snapshot.queryParams['id'])
  }

    curs: Curso[]=[]
    nivelp=Object.values(Nivel)

  confirmarModificacion(){
    this.miServicio.modificarServicio(this.nuevoId,this.nuevoNombre,this.nuevaDuracion,this.nuevoNivel)
    this.ruta.navigate([""])
  }
}
