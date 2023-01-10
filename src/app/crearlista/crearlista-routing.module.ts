import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearlistaPage } from './crearlista.page';

const routes: Routes = [
  {
    path: '',
    component: CrearlistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearlistaPageRoutingModule {}
