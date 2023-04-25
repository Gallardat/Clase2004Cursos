import { Component } from '@angular/core';
import { CursoServicioService } from '../curso-servicio.service';
import { Curso } from '../Curso';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css']
})
export class ListaCursoComponent {
acc:number=0
constructor(private ruta: Router, private activarRuta:ActivatedRoute,private miServicio:CursoServicioService)
{
}
ngOnInit()
{
  //this.activarRuta.snapshot.params["id"]
  this.curs=this.miServicio.curso
}
curs:Curso[]=[]

eliminar(id:number)
{

    this.miServicio.eliminarServicio(id)
    this.miServicio.mostrar

}
}
