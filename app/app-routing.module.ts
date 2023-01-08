import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hom1',
    pathMatch: 'full'
  },
  {
    path: 'hom1',
    children: [
      {
        path: '',
        loadChildren: () => import('./hom1/hom1.module').then( m => m.Hom1PageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./hom1/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'signup',
        loadChildren: () => import ('./hom1/signup/signup.module').then(m => m.SignupPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import ('./hom1/contact/contact.module').then(m => m.ContactPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import ('./hom1/about/about.module').then(m => m.AboutPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
