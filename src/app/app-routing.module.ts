import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'uttt',
    loadChildren: () => import('./pages/uttt/uttt.module').then( m => m.UtttPageModule)
  },
  {
    path: 'uac',
    loadChildren: () => import('./pages/uac/uac.module').then( m => m.UacPageModule)
  },
  {
    path: 'uat',
    loadChildren: () => import('./pages/uat/uat.module').then( m => m.UatPageModule)
  },
  {
    path: 'mv',
    loadChildren: () => import('./pages/mv/mv.module').then( m => m.MvPageModule)
  },
  {
    path: 'maestrias',
    loadChildren: () => import('./pages/maestrias/maestrias.module').then( m => m.MaestriasPageModule)
  },
  {
    path: 'Estudiantes',
    loadChildren: () => import('./pages/formulario/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'Estudiante',
    loadChildren: () => import('./pages/formulario/details/details.module').then( m => m.DetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
