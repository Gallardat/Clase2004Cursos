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

  nuevoId:number=0;
  nuevoNombre: string="";
  nuevaDuracion:number=0;
  nuevoNivel: Nivel;
//el data representa todo el flojo de datos de params
  constructor(private ruta: Router, private activarRuta: ActivatedRoute,private miServicio: CursoServicioService){
    this.activarRuta.params.subscribe(data => {
    this.nuevoId = data['id'];
    let cursoN=this.miServicio.encontrarCurso(this.nuevoId)
    if(cursoN!=undefined)
    {
      this.nuevoNombre = cursoN.nombre;
     this.nuevaDuracion = cursoN.duracion

    }
    // this.nuevoNombre = data['nombre'];
    // this.nuevaDuracion = data['duracion']
  })

  }
    curs: Curso[]=[]
    nivelp=Object.values(Nivel)

  confirmarModificacion(){
    if(this.nuevoId==undefined)
    {
      let nuevoCurso= new Curso(this.nuevoId,this.nuevoNombre,this.nuevaDuracion,this.nuevoNivel)
      this.miServicio.altaServicio(nuevoCurso)
      this.ruta.navigate([""])
    }
    else
    {
      this.miServicio.modificarServicio(this.nuevoId,this.nuevoNombre,this.nuevaDuracion,this.nuevoNivel)
      this.ruta.navigate([""])
    }
  }


}
// this.nuevoId=this.activarRuta.snapshot.queryParams["id"]
    // this.nuevoNombre=this.activarRuta.snapshot.queryParams["nombre"]
    // this.nuevaDuracion=this.activarRuta.snapshot.queryParams["duracion"]
    // this.nuevoNivel=Nivel.avanzado
    // this.curs=this.miServicio.curso
    //para diferentes cantidad de parametros
    // this.acc=parseInt(this.activarRuta.snapshot.queryParams['accion'])
  //this.curs=this.miServicio.curso
