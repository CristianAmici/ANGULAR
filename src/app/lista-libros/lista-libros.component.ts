import { Component, OnInit } from '@angular/core';
import { DepositoLibrosService } from '../deposito-libros.service';
import { MiValoracionService } from '../mi-valoracion.service';
import { Libro } from './libro';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.scss']
})
export class ListaLibrosComponent implements OnInit {

  libros: Libro[] =[{
    nombre: "El libro negro de la nueva izquierda",
    autor: "Laje Agustin y Marquez Nicolas",
    promedio: 10,
    descargas: 234,
    img: "../../assets/img/ElLibroNegroDeLaNuevaIzquierda.jpeg",
    calificacion: 0
  },
  {
    nombre: "EL manual del perfecto idiota latinoamericano",
    autor: "Álvaro Vargas Llosa",
    promedio: 10,
    descargas: 1200,
    img: "../../assets/img/Manual.jpeg",
    calificacion: 0
  },
  {
    nombre: "4000 años de control de precios y salarios",
    autor: "Robert Schuettinger",
    promedio: 10,
    descargas: 2312312,
    img: "../../assets/img/4000años.jpeg",
    calificacion: 0
  },
];

  constructor( private valoracion : MiValoracionService,
    private depositoService: DepositoLibrosService) {
   }

  ngOnInit(): void {
  }
  
  addToValoracion(libro){
    libro.promedio=(libro.promedio + libro.calificacion)/2;
    this.valoracion.agregarAValoracion(libro);
    console.log(libro.promedio);
  }

  mejor(m: String){
    alert(m);
  }

  peor(m: String){
    alert(m);
  }

}
