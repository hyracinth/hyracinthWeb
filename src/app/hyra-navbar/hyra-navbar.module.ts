import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HyraNavbarComponent } from './hyra-navbar.component';

@NgModule({
  declarations: [
    HyraNavbarComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    HyraNavbarComponent
  ]

})
export class HyraNavbarModule { }
