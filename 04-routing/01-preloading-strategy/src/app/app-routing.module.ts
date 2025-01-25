import { NgModule } from '@angular/core';
import { NoPreloading, RouterModule, Routes } from '@angular/router';
import { CustomPreloading } from './custom-preload.service';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
    data: {
      preload: true,
    }
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    data: {
      preload: false,
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloading})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
