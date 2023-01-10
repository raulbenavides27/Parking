import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    
    component: MenuPage,
    children: [
      {
        path: 'home',
        redirectTo: 'home',
        pathMatch: 'full'
      },  
      {
        path: '**',
        redirectTo: 'e404',
        pathMatch: 'full'
      },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'e404',
    loadChildren: () => import('../e404/e404.module').then( m => m.E404PageModule)
  }
    ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
