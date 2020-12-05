import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Libro } from './lista-libros/libro';

@Injectable({
  providedIn: 'root'
})
export class MiValoracionService {

  private _misLibros: Libro [] =[];
  misLibros: BehaviorSubject<Libro[]> = new BehaviorSubject([]);

  constructor() {

  }

   //promedioLibro(libro: Libro){


   //}
  agregarAValoracion(libro: Libro) {
    let item: Libro = this._misLibros.find((v1) => v1.nombre == libro.nombre);
    if(!item){
      this._misLibros.push({...libro});
    } else{
      console.log("cambie la calificacion de mi libro"+libro.calificacion);
        item.calificacion =  libro.calificacion;
        console.log("cambie la calificacion de mi libro"+libro.calificacion);
    }

    console.log(this._misLibros);
    this.misLibros.next(this._misLibros);
  }
}
