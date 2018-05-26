import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    BrowserAnimationsModule,
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,

    AppRoutingModule,
    HyraNavbarModule,
    HyraHomeModule,
    HyraProjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
