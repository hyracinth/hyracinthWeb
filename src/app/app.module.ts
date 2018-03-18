import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HyraNavbarComponent } from './hyra-navbar/hyra-navbar.component';
import { HyraHomeModule } from './hyra-home/hyra-home.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HyraNavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),

    AppRoutingModule,
    HyraHomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
