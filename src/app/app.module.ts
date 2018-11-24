import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomEntryComponent } from './room-entry/room-entry.component';
import { RoomSetupComponent } from './room-setup/room-setup.component';
import { FormsModule } from '@angular/forms';

import { ParseParticipantsComponent } from './parse-participants/parse-participants.component';

import { PapaParseModule } from 'ngx-papaparse';
import { WinnerDisplayComponent } from './winner-display/winner-display.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomEntryComponent,
    RoomSetupComponent,
    ParseParticipantsComponent,
    WinnerDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PapaParseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
