export class Curso
{
  idCurso: number;
  nombre: string;
  duracion:number;
  nivel: Nivel;

  constructor(idCurso: number,nombre:string,duracion:number,nivel:Nivel){
    this.idCurso=idCurso
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
