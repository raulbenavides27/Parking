import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-notas',
  templateUrl: './detalle-notas.page.html',
  styleUrls: ['./detalle-notas.page.scss'],
})
export class DetalleNotasPage implements OnInit {

  nota: {
    fecha: string,
    fechaTexto: string,
    texto: string
  }

  constructor(private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.nota = this.router.getCurrentNavigation().extras.state.nota;
      console.log(this.nota);
    }
  }

  ngOnInit() {
  }

}