import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HyraProjectsComponent } from './hyra-projects.component';

import { HyraProjectsRoutingModule } from './hyra-projects-routing.module';
import { StudioGhibliModule } from './studio-ghibli/studio-ghibli.module';

@NgModule({
  imports: [
    CommonModule,
    HyraProjectsRoutingModule,
    StudioGhibliModule,
    RouterModule
  ],
  declarations: [
    HyraProjectsComponent,
  ]
})
export class HyraProjectsModule { }
