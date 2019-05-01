import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './overview.component';
import { FeatureComponent  } from './feature/feature.component'

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent
  },
  {
    path: 'feature/:name',
    component: FeatureComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
