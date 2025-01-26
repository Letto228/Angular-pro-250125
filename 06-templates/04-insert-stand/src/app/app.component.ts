import { Component, inject, Injector, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DeclaratedComponent } from './declarated/declarated.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: 'name',
      useValue: 'Undec Egor'
    }
  ]
})
export class AppComponent {
  title = 'insert-stand';

  private readonly injector = inject(Injector);

  readonly component$ = from(import('./undeclarated/undeclarated.component').then(m => m.UndeclaratedComponent));
  readonly componentInjector = Injector.create({
    providers: [{provide: 'name', useValue: 'New Egor'}],
    parent: inject(Injector),
  });

  @ViewChild('viewContainer', {static: true, read: ViewContainerRef})
  private container!: ViewContainerRef;

  onClickComponent() {
    import('./undeclarated/undeclarated.component').then(m => {
      const injector = Injector.create({
        providers: [{provide: 'name', useValue: 'New Egor'}],
        parent: this.injector,
      });

      this.container.createComponent(m.UndeclaratedComponent, {injector});
    });
    // this.container.createComponent(DeclaratedComponent)
  }

  onClickTemplate(template: TemplateRef<unknown>) {
    const viewRef = this.container.createEmbeddedView(template, {name: 'Egor'});

    console.log(viewRef);
  }

  onClickClear() {
    this.container.clear();
  }

}
