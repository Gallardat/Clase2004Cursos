export class Curso
{
  idCurso: number;
  nombre: string;
  duracion:number;
  nivel: Nivel;
  static contador=0

  constructor(idCurso: number,nombre:string,duracion:number,nivel:Nivel){
    this.idCurso=++Curso.contador
    this.nombre=nombre
    this.duracion=duracion
    this.nivel=nivel


  }
}
export enum Nivel{
iniciacion="iniciacion",
intermedio="intermedio",
avanzado="avanzado"

}
