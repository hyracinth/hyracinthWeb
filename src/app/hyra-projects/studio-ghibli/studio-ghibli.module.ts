import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { StudioGhibliComponent } from './studio-ghibli.component';

import { StudioGhibliService } from '../../services/studio-ghibli.service';

@NgModule({
  declarations: [
    StudioGhibliComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSnackBarModule
  ],
  exports: [
    StudioGhibliComponent
  ],
  providers: [
    StudioGhibliService
  ],
  entryComponents: [
    StudioGhibliComponent
  ]
})
export class StudioGhibliModule { }
