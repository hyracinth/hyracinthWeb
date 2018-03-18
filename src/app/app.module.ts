import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HyraNavbarModule } from './hyra-navbar/hyra-navbar.module';
import { HyraHomeModule } from './hyra-home/hyra-home.module';
import { HyraProjectsModule } from './hyra-projects/hyra-projects.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),

    AppRoutingModule,
    HyraNavbarModule,
    HyraHomeModule,
    HyraProjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
