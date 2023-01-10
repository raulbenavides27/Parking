import { Component, OnInit } from '@angular/core';
import { ToastController,NavController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit {
  
  fecha: string;
   
  notas: Array<{
    fecha: string,
    fechaTexto:string,
    texto: string
  }>

  notaActual:{
    fecha: string,
    fechaTexto:string,
    texto: string
  };
  constructor(
    public toastController: ToastController,
    public navCtrol:NavController) {
  moment.locale('es-cl');
  this.fecha = moment().format();
  this.cargarNotas();
} 
ngOnInit() {
}

cargarNotas(){
  var fecha = moment(this.fecha).format('DD-MM-YY');

  this.notas = JSON.parse(localStorage.getItem('notas'));
  if(this.notas){
    var notaActual = this.notas.find((elemento)=>{
      return elemento.fecha == fecha;
    });
    if (notaActual){
      this.notaActual = notaActual;
    }else{
      this.inicializarNuevaNota();
    }
  }else{
      this.inicializarNuevaNota();
    }
}
inicializarNuevaNota(){
  var fecha =moment(this.fecha).format('DD-MM-YY');
  var dia =moment(this.fecha).format('DD');
  var mes =moment(this.fecha).format('MMMM');
  var year =moment(this.fecha).format('YYYY');

  this.notaActual = {
    fechaTexto: dia + ' de ' + mes + ' del ' + year,
    fecha:fecha,
    texto: ''
  }
}

async guardar(notaActual:{
    fecha: string,
    fechaTexto:string,
    texto: string
  }){

  var fecha = moment(this.fecha).format('DD-MM-YY');

  if(this.notas){
    var item = this.notas.find((elemento)=>{
      return elemento.fecha == fecha;
    });
    if(item){
      localStorage.setItem('notas',JSON.stringify(this.notas));
  }else{  
      this.guardarItem(notaActual);
  }
    }else{
      this.notas = [];
      this.guardarItem(notaActual);
  }
  
  const toast = await this.toastController.create({
    
    message:'Datos guardados',
    duration: 2000
  });
  
  toast.present();
  }
    
      guardarItem(nota:{fecha: string,fechaTexto: string,texto: string }){
      this.notas.push(nota);
    localStorage.setItem('notas',JSON.stringify(this.notas));
    

  }
  

}
