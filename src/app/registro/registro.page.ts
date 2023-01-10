import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  
  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrol:NavController) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'pass': new FormControl("", Validators.required),
      'confirmacion': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }
    if(f.pass==f.confirmacion){

    var usuario = {
      nombre: f.nombre,
      password: f.pass
    }

   
    
    const alert = await this.alertController.create({
      header: 'Bienvenido',
      message: 'Registro exitoso',
      buttons: ['Aceptar']
      
      
    });
    localStorage.setItem('usuario',JSON.stringify(usuario));
  //  localStorage.setItem('ingresado','true');
    this.navCtrol.navigateRoot('menu/home');
    //tenia la intencio de redirecionar al login pero no funciona porque pasa directo al home
    this.navCtrol.navigateRoot('login');
    await alert.present();
        return;
        
        
  }else{
  const alert = await this.alertController.create({
    header: 'Error,No Registrado',
    message: 'tu contraseña no coinside reintenta por favor',
    buttons: ['Aceptar'],
   
    
  });


  await alert.present();
      return;
    

}



}
}
