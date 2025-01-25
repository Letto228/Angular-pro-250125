import { Component, inject, Inject, Injectable, InjectionToken, Injector } from '@angular/core';

// @Injectable()
class Test {
  constructor(@Inject("Token") test: string) {
    inject("Token");
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent {
  title = 'stand';

  constructor() {
    inject(Injector)

    
    const token = new InjectionToken('Test token');
    const tokenCopy = new InjectionToken('Test class token copy');
    const parentInjector = Injector.create({providers: []});
    const injector = Injector.create({
      parent: parentInjector,
      providers: [
        {
          // provide: Test, // token
          provide: token, // token
          // useValue: 123,
          useFactory: () => 123,
        },
        {
          provide: Test, // token
          // useClass: Test,
          useFactory: () => new Test(),
        },
        // Test,
        {
          provide: tokenCopy,
          // useClass: Test, // token for copy value
          useFactory: () => inject(Test),
        },
      ],
    });

    injector.get(token);

    setTimeout(() => {
      injector.get(Test); // Create for first

      injector.get(Test);
      injector.get(Test);
      injector.get(Test);
    }, 4000);
  }
}
