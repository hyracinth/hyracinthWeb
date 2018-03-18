import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudioGhibliComponent } from './studio-ghibli.component';

import { StudioGhibliService } from '../../services/studio-ghibli.service';

@NgModule({
  declarations: [
    StudioGhibliComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    StudioGhibliComponent
  ],
  providers: [
    StudioGhibliService
  ]
})
export class StudioGhibliModule { }
