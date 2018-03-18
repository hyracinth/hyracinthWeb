import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HyraProjectsComponent } from './hyra-projects.component';

const projectRoutes: Routes = [
  {
    path: 'Projects',
    data: {
      displayName: 'Projects'
    },
    component: HyraProjectsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(projectRoutes)
  ],
  declarations: []
})
export class HyraProjectsRoutingModule { }
