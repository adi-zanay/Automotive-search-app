import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewcarsPage } from './newcars.page';

const routes: Routes = [
  {
    path: '',
    component: NewcarsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewcarsPageRoutingModule {}
