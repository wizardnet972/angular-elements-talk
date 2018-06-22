
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, ComponentFactoryResolver, EventEmitter, ComponentFactory, ApplicationRef } from '@angular/core';

import { AppComponent } from './app.component';

import {Observable, merge} from 'rxjs';
import {map} from 'rxjs/operators';

import {FooComponent} from './foo/foo.component';

@NgModule({
  declarations: [AppComponent, FooComponent],
  imports: [BrowserModule],
  providers: [],
  // bootstrap: [AppComponent],
  entryComponents: [FooComponent]
})
export class AppModule {
  // Angular Elements - lite version from @wizardnet972 (twitter)

  constructor(private injector1: Injector) {
    const component = FooComponent;

    class NgElement extends HTMLElement {
      constructor(private injector?: Injector) {
        super();

        this.injector = injector1;
      }

      attributeChangedCallback(
        attrName: string,
        oldValue: string | null,
        newValue: string,
        namespace?: string
      ): void {}

      connectedCallback(): void {
        const element = this;

        const componentFactory = this.injector
          .get(ComponentFactoryResolver)
          .resolveComponentFactory(component);

        const childInjector = Injector.create({
          providers: [],
          parent: this.injector
        });

        const projectableNodes = null;

        const componentRef = componentFactory.create(
          childInjector,
          projectableNodes,
          element
        );

        const applicationRef = this.injector.get<ApplicationRef>(
          ApplicationRef
        );
        applicationRef.attachView(componentRef.hostView);

        const eventEmitters = componentFactory.outputs.map(
          ({ propName, templateName }) => {
            const emitter = (componentRef.instance as any)[
              propName
            ] as EventEmitter<any>;
            return emitter.pipe(
              map((value: any) => ({ name: templateName, value }))
            );
          }
        );

        const events = merge(...eventEmitters);

        const ngElementEventsSubscription = events.subscribe((e: any) => {
          this.dispatchEvent(
            new CustomEvent(e.name, {
              bubbles: false,
              cancelable: false,
              detail: e.value
            })
          );
        });
      }

      disconnectedCallback(): void {}
    }

    const ng = NgElement;
    customElements.define('foo-component', ng);
  }

  ngDoBootstrap() {}
}
