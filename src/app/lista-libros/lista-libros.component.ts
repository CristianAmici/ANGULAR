import { Component, OnInit } from '@angular/core';
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
    precio: 1400,
    descargas: 234,
    img: "../../assets/img/ElLibroNegroDeLaNuevaIzquierda.jpeg",
    calificacion: 0
  },
  {
    nombre: "EL manual del perfecto idiota latinoamericano",
    autor: "Álvaro Vargas Llosa",
    precio: 2000,
    descargas: 1200,
    img: "../../assets/img/Manual.jpeg",
    calificacion: 0
  },
  {
    nombre: "4000 años de control de precios y salarios",
    autor: "Robert Schuettinger",
    precio: 3500,
    descargas: 2312312,
    img: "../../assets/img/4000años.jpeg",
    calificacion: 0
  },
];


  constructor() { }

  ngOnInit(): void {
  }
  SubirCalificacion(libro: Libro): void{
    libro.calificacion++;

  }
  BajarCalificacion(libro: Libro): void{
    if(libro.calificacion>0)
    libro.calificacion--;

  }


}
