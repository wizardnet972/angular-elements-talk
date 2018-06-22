import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ContribGraphModule } from './contrib-graph';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, ContribGraphModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
