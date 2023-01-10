import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  indiceSeleccionado: number = 0;

  paginas = [
    {
      titulo: 'Home',
      url: '/menu/home',
      icono: 'home'
    },
    {
      titulo: 'Crear lista',
      url: '/menu/crearlista',
      icono: 'receipt'
      
    },
    {
      titulo: 'Notas',
      url: '/menu/mnotas',
      icono: 'book'
    },
    {
      titulo: 'Ejemplo API',
      url: '/menu/pendientes',
      icono: 'book'
    },
    {
      titulo: 'Favoritos',
      url: '/menu/favorito',
      icono: 'book'
    }
  
  ]

  constructor(public alertController: AlertController,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  cambiarIndiceSeleccionado(i){
    this.indiceSeleccionado = i;
  }

  async salir(){
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Confirmar para salir?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });

    await alert.present();
  }

}

