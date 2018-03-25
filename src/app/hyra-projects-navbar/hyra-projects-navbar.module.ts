import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HyraProjectsNavbarComponent } from './hyra-projects-navbar.component';

@NgModule({
  declarations: [
    HyraProjectsNavbarComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    HyraProjectsNavbarComponent
  ]
})
export class HyraProjectsNavbarModule { }
