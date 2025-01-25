import { ApplicationRef, Component, EventEmitter, inject, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'zone';
  counter = 0;

  constructor() {
    inject(NgZone).runOutsideAngular(() => {
      setInterval(() => {
        this.counter += 1;

        console.log('Hello', this.counter);
      }, 1000);
    });

    // inject(NgZone).run(() => {

    // });
  }

  onClick() {
    this.counter += 1;

    console.log('Increment');
  }
}
