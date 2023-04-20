import { Injectable } from '@angular/core';
import { Curso, Nivel } from './Curso';

@Injectable({
  providedIn: 'root'
})
export class CursoServicioService {
  constructor() {}

  curso: Curso[]=[

  new Curso(1,"HTML",2,Nivel.avanzado),
  new Curso(2,"CSS",3,Nivel.iniciacion),
  new Curso(3,"Angular",2,Nivel.intermedio)
]

modificarServicio(idM:number,nombreM:string,duracionM:number,nivelM:Nivel)
{
  for(let x=0;x<this.curso.length;x++)
  {
    if(this.curso[x].idCurso==idM)
    {
      this.curso[x].idCurso=idM
      this.curso[x].nombre=nombreM
      this.curso[x].duracion=duracionM
      this.curso[x].nivel=nivelM
    }
  }
}
}
