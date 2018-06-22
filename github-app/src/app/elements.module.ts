import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { createCustomElement } from '@angular/elements';

import { ContribGraphComponent, ContribGraphModule } from './contrib-graph';

@NgModule({
  imports: [BrowserModule, ContribGraphModule]
})
export class ElementsModule {
  constructor(private injector: Injector) {
    const ngElement = createCustomElement(ContribGraphComponent, {
      injector
    });
    customElements.define('contrib-graph', ngElement);
  }

  ngDoBootstrap() {}
}
