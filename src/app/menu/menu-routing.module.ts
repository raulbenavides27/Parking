import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    
    component: MenuPage,
    children: [
      {
        path: 'favorito',
        redirectTo: 'favorito',
        pathMatch: 'full'
      },
      {
        path: 'pendientes',
        redirectTo: 'pendientes',
        pathMatch: 'full'
      },
      {
        path: 'crearlista',
        redirectTo: 'crearlista',
        pathMatch: 'full'
      },
      {
        path: 'favorito',
        redirectTo: 'favorito',
        pathMatch: 'full'
      },
      {
        path: 'home',
        redirectTo: 'home',
        pathMatch: 'full'
      },  
      {
        path: 'notas',
        redirectTo: 'notas',
        pathMatch: 'full'
      },
      {
        path: 'mnotas',
        redirectTo: 'mnotas',
        pathMatch: 'full'
      },  
      
      {
        path: '**',
        redirectTo: 'e404',
        pathMatch: 'full'
      },
      {
    path: 'favorito',
    loadChildren: () => import('../favorito/favorito.module').then( m => m.FavoritoPageModule)
  },
  {
    path: 'pendientes',
    loadChildren: () => import('../pendientes/pendientes.module').then( m => m.PendientesPageModule)
  },
  {
    path: 'crearlista',
    loadChildren: () => import('../crearlista/crearlista.module').then( m => m.CrearlistaPageModule)
  },
  {
    path: 'notas',
    loadChildren: () => import('../notas/notas.module').then( m => m.NotasPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'mnotas',
    loadChildren: () => import('../mnotas/mnotas.module').then( m => m.MnotasPageModule)
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
