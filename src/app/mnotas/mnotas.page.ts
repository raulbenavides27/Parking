import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-mnotas',
  templateUrl: './mnotas.page.html',
  styleUrls: ['./mnotas.page.scss'],
})
export class MnotasPage implements OnInit {

  notas: Array<{
    fecha: string,
    fechaTexto: string,
    texto: string
  }>

  constructor(private router: Router) {
    this.cargarNotas();
  }

  ngOnInit() {
  }

  cargarNotas(){
    this.notas = JSON.parse(localStorage.getItem('notas'));
    if(!this.notas)return;
    this.notas.sort((item1,item2)=>{
      if(new Date(item1.fecha) < new Date(item2.fecha)) return 1;
      if(new Date(item1.fecha) > new Date(item2.fecha)) return -1;
      return 0;
    });
  }
  irDetalle(nota:{
    fecha: string,
    fechaTexto: string,
    texto: string
  }){
    let datosNavegacion: NavigationExtras={
      state: {
        nota: nota
      }
    }

    this.router.navigate(['/detalle-notas'],datosNavegacion);
  }
}