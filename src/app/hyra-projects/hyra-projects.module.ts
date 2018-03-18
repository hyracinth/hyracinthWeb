import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HyraProjectsComponent } from './hyra-projects.component';

import { HyraProjectsRoutingModule } from './hyra-projects-routing.module';
import { StudioGhibliModule } from './studio-ghibli/studio-ghibli.module';

@NgModule({
  imports: [
    CommonModule,
    HyraProjectsRoutingModule,
    StudioGhibliModule
  ],
  declarations: [
    HyraProjectsComponent
  ]
})
export class HyraProjectsModule { }
