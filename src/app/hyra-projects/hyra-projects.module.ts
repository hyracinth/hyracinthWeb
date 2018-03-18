import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HyraProjectsComponent } from './hyra-projects.component';

import { HyraProjectsRoutingModule } from './hyra-projects-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HyraProjectsRoutingModule
  ],
  declarations: [
    HyraProjectsComponent
  ]
})
export class HyraProjectsModule { }
