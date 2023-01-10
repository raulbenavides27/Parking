import { Component, OnInit } from '@angular/core';
import { Proveedor1Service } from '../proveedor1.service';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.page.html',
  styleUrls: ['./pendientes.page.scss'],
})
export class PendientesPage implements OnInit {
  obtenerDatos:any[]=[];
  constructor(public proveedor:Proveedor1Service) {
    this.proveedor.obtenerDatos<any[]>("").subscribe(data =>{
      this.obtenerDatos = data
      console.log(this.obtenerDatos)
    })
  }

  ngOnInit() {}
}
