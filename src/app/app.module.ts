import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { LibrosUsuarioComponent } from './libros-usuario/libros-usuario.component';
import { FormsModule } from "@angular/forms";
import { BibliotecaHomeComponent } from './biblioteca-home/biblioteca-home.component';
import { BibliotecaRankingComponent } from './biblioteca-ranking/biblioteca-ranking.component';
import { InputTextNumberComponent } from './input-text-number/input-text-number.component';
@NgModule({
  declarations: [
    AppComponent,
    ListaLibrosComponent,
    LibrosUsuarioComponent,
    BibliotecaHomeComponent,
    BibliotecaRankingComponent,
    InputTextNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
