import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HyraHomeModule } from './hyra-home/hyra-home.module';
import { HyraProjectsModule } from './hyra-projects/hyra-projects.module';

import { HyraNavbarComponent } from './hyra-navbar/hyra-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HyraNavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),

    AppRoutingModule,
    HyraHomeModule,
    HyraProjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
