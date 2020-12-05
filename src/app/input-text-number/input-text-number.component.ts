import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-input-text-number',
  templateUrl: './input-text-number.component.html',
  styleUrls: ['./input-text-number.component.scss']
})
export class InputTextNumberComponent implements OnInit {

  constructor() { }
  
  @Input() calificacion: number;
  @Input() promedio :Number;
  @Output() promedioChange: EventEmitter<Number>= new EventEmitter<Number>();
  @Output() calificacionChange: EventEmitter<Number>= new EventEmitter<Number>();
  @Output() mejor: EventEmitter<String>= new EventEmitter<String>();
  @Output() peor: EventEmitter<String>= new EventEmitter<String>();
  ngOnInit(): void {
  }


  SubirCalificacion(): void{
    if(this.calificacion<10){
      this.calificacion++;
      this.calificacionChange.emit(this.calificacion);

    } else{
      this.mejor.emit("este libro lo amo");
    }
  }
  BajarCalificacion(): void{
    if(this.calificacion>0){
    this.calificacion--;
    this.calificacionChange.emit(this.calificacion);

    }
    else{
      
        this.peor.emit("este libro lo odio");
      }
    
  }
  enviarCalificacion(){
    this.calificacionChange.emit(this.calificacion);
  }
  cambioDeCalificacion(event): void {
    if(event.key<="z"&&event.key>"A") 
    event.preventDefault();
   this.calificacionChange.emit( this.calificacion/2);
    if( this.calificacion==0){
      this.peor.emit("este libro lo odio");
    } else if (this.calificacion==10){
      this.mejor.emit("este libro lo amo");
      }
    }
  }

