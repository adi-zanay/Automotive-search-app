import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hom1Page } from './hom1.page';

const routes: Routes = [
  {
    path: '',
    component: Hom1Page
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'newcars',
    loadChildren: () => import('./newcars/newcars.module').then( m => m.NewcarsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hom1PageRoutingModule {}
