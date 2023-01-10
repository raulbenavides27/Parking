import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleNotasPage } from './detalle-notas.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleNotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleNotasPageRoutingModule {}
