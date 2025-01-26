import { Component, inject } from '@angular/core';
import { SwPush, SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-worker';

  constructor() {
    const swUpdate = inject(SwUpdate);

    swUpdate.versionUpdates
      .pipe(filter((event): event is VersionReadyEvent => event.type === 'VERSION_READY'))
      .subscribe(() => {
        if (confirm('Есть новая вресия приложения, перезагрузить?')) {
          document.location.reload();
        }
      })

    // timer(1000 * 60 * 60)
    //   .pipe(
    //     switchMap(() => swUpdate.checkForUpdate()),
    //     filter(Boolean),
    //   )
    //   .subscribe(() => {
    //     if (confirm('Есть новая вресия приложения, перезагрузить?')) {
    //       document.location.reload();
    //     }
    //   })

    Notification.requestPermission().then(permistionResult => {
      console.log(permistionResult);

      if (permistionResult === 'granted') {
        console.log('Can show notification');
      }
    })

    const swPush = inject(SwPush);

    swPush.messages.subscribe(message => {
      console.log(message);
    });

    const serverPublicKey = '...';

    swPush.requestSubscription({serverPublicKey}).then(pushSubscruiption => {
      console.log(pushSubscruiption.toJSON());
    })
  }
}
