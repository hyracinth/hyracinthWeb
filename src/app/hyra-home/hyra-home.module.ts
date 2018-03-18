import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HyraHomeComponent } from './hyra-home.component';

import { HyraHomeRoutingModule } from './hyra-home-routing.module';

@NgModule({
  declarations: [
    HyraHomeComponent
  ],
  imports: [
    CommonModule,
    HyraHomeRoutingModule
  ]
})
export class HyraHomeModule { }
