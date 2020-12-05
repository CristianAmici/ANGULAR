import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../lista-libros/libro';
import { MiValoracionService } from '../mi-valoracion.service';

@Component({
  selector: 'app-libros-usuario',
  templateUrl: './libros-usuario.component.html',
  styleUrls: ['./libros-usuario.component.scss']
})
export class LibrosUsuarioComponent implements OnInit {

  usuario1= {
    "nombre": "Pedro"
  }

    misLibros$:Observable<Libro[]>;
  constructor(private valoracion: MiValoracionService) { 

    this.misLibros$ = valoracion.misLibros.asObservable();
    
  }
  
  
  ngOnInit(): void {
  }   
}
