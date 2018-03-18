import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HyraHomeComponent } from './hyra-home.component';

const homeRoutes: Routes = [
  {
    path: 'Home',
    data: {
      displayName: 'Home'
    },
    component: HyraHomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  declarations: []
})
export class HyraHomeRoutingModule { }
