import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros-usuario',
  templateUrl: './libros-usuario.component.html',
  styleUrls: ['./libros-usuario.component.scss']
})
export class LibrosUsuarioComponent implements OnInit {

  usuario1= {
    "nombre": "Pedro",
    "numeroUsuario": 1,
    "prestado": 234,
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
