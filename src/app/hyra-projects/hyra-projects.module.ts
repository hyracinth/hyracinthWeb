import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HyraProjectsComponent } from './hyra-projects.component';

import { HyraProjectsRoutingModule } from './hyra-projects-routing.module';
import { HyraProjectsNavbarModule } from '../hyra-projects-navbar/hyra-projects-navbar.module';
import { StudioGhibliModule } from './studio-ghibli/studio-ghibli.module';

@NgModule({
  declarations: [
    HyraProjectsComponent,
  ],
  imports: [
    CommonModule,
    HyraProjectsRoutingModule,
    HyraProjectsNavbarModule,
    StudioGhibliModule,
    RouterModule
  ],
})
export class HyraProjectsModule { }
