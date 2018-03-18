import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { HyraHomeComponent } from './hyra-home.component';

import { HyraHomeRoutingModule } from './hyra-home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HyraHomeRoutingModule
  ],
  declarations: [
    HyraHomeComponent
  ]
})
export class HyraHomeModule { }
