import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MnotasPage } from './mnotas.page';

const routes: Routes = [
  {
    path: '',
    component: MnotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MnotasPageRoutingModule {}
