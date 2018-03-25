import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HyraProjectsNavbarComponent } from './hyra-projects-navbar.component';

@NgModule({
  declarations: [
    HyraProjectsNavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HyraProjectsNavbarComponent
  ]
})
export class HyraProjectNavbarModule { }
