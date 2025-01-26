import { inject, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
})
export class AppModule {
  ngDoBootstrap() {}

  constructor() {
    const injector = inject(Injector);

    const helloCusstomElement = createCustomElement(HelloComponent, {injector});

    customElements.define('custom-hello', helloCusstomElement);
  }
}
