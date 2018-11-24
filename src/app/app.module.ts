import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParseParticipantsComponent } from './parse-participants/parse-participants.component';

import { PapaParseModule } from 'ngx-papaparse';

@NgModule({
  declarations: [
    AppComponent,
    ParseParticipantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PapaParseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
