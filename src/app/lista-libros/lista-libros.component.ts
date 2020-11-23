import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.scss']
})
export class ListaLibrosComponent implements OnInit {

  libro1={
    "nombre": "El libro negro de la nueva izquierda",
    "autor": "Laje Agustin y Marquez Nicolas",
    "numero": 1,
    "prestado": 234
  }


  constructor() { }

  ngOnInit(): void {
  }

}
