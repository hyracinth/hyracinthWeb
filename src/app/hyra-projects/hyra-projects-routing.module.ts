import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HyraProjectsComponent } from './hyra-projects.component';
import { StudioGhibliComponent } from './studio-ghibli/studio-ghibli.component';

const projectRoutes: Routes = [
  {
    path: 'Projects',
    data: {
      displayName: 'Projects'
    },
    component: HyraProjectsComponent,
    children: [{
      path: 'StudioGhibli',
      data: {
        displayName: 'StudioGhibli'
      },
      component: StudioGhibliComponent,
    },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(projectRoutes)
  ],
  declarations: [],
})
export class HyraProjectsRoutingModule { }
