import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AeroflotService } from 'src/app/services/aeroflot.service';
import { RailwaysService } from 'src/app/services/railways.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [
    AeroflotService,
    RailwaysService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
