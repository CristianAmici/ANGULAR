import { Component, OnInit } from '@angular/core';
import { libro } from './libro';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.scss']
})
export class ListaLibrosComponent implements OnInit {

  libros: libro[] =[{
    nombre: "El libro negro de la nueva izquierda",
    autor: "Laje Agustin y Marquez Nicolas",
    precio: 1400,
    descargas: 234,
    img: "../../assets/img/ElLibroNegroDeLaNuevaIzquierda.jpeg"
  },
  {
    nombre: "EL manual del perfecto idiota latinoamericano",
    autor: "Álvaro Vargas Llosa",
    precio: 2000,
    descargas: 1200,
    img: "../../assets/img/Manual.jpeg"
  },
  {
    nombre: "4000 años de control de precios y salarios",
    autor: "Robert Schuettinger",
    precio: 3500,
    descargas: 2312312,
    img: "../../assets/img/4000años.jpeg"
  },
];


  constructor() { }

  ngOnInit(): void {
  }

}
