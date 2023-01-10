import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CardNotasComponent } from './card-notas/card-notas.component';



@NgModule({
  declarations: [CardNotasComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule

  ],
  exports:[CardNotasComponent]
})
export class ModuloComponenteModule { }
