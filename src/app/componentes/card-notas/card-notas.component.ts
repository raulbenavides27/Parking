import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-card-notas',
  templateUrl: './card-notas.component.html',
  styleUrls: ['./card-notas.component.scss'],
})
export class CardNotasComponent implements OnInit {
  
@Input() nota:{
    fecha: string,
    fechaTexto: string,
    texto: string
  };

@Input() soloLectura: boolean = false;

@Output() eventoGuardar: EventEmitter<{
  fecha: string,
  fechaTexto: string,
  texto: string
}> = new EventEmitter<{
  fecha: string,
  fechaTexto: string,
  texto: string
}>();;

  constructor() { }

  ngOnInit() {}

  guardar(){
    this.eventoGuardar.emit(this.nota);
    
  }
}
