import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  // title = 'signals';
  get title(): string {
    console.log('CD called');

    return 'signals';
  }

  readonly count = signal(0, {equal: (a, b) => a === b})
  readonly doubleCount = computed(() => this.count() * 2);

  constructor() {
    // const count = signal(0);

    // console.log(count());

    // count.set(2);
    // count.set(2);
    // count.set(2);
    // count.set(2);

    // console.log(count());

    // count.update(value => value + 1);

    // console.log(count());

    // count.update(value => value + 1);

    // console.log(count());

    // count.update(value => value + 1);

    // console.log(count());

    setInterval(() => {
      this.count.update(value => value + 1);

      console.log(this.count());
    }, 1000);


    // const showCount = signal(false);
    // const count = signal(0);
    // const conditionalCount = computed(
    //   () => {
    //     console.log('Calculated conditionalCount')
    //     return showCount() ? `This count is ${count()}` : `Nothing`;
    //   }
    // );

    // console.log('first calculate');
    // console.log(conditionalCount());

    // console.log('count.set(1)');
    // count.set(1);

    // console.log(conditionalCount());

    // console.log('count.set(2)');
    // count.set(2);

    // console.log(conditionalCount());

    // console.log('count.set(3)');
    // count.set(3);

    // console.log(conditionalCount());

    // console.log('showCount.set(true)');
    // showCount.set(true);

    // console.log(conditionalCount());

    // console.log('count.set(1)');
    // count.set(1);

    // console.log(conditionalCount());

    // console.log('count.set(2)');
    // count.set(2);

    // console.log(conditionalCount());

    // console.log('count.set(3)');
    // count.set(3);

    // console.log('showCount.set(false)');
    // showCount.set(false);

    // console.log(conditionalCount());

    // console.log('count.set(1)');
    // count.set(1);

    // console.log(conditionalCount());

    // console.log('count.set(2)');
    // count.set(2);

    // console.log(conditionalCount());

    // console.log('count.set(3)');
    // count.set(3);
    
    const effectRef = effect(() => {
      console.log(`The current count is: ${this.count()}`);
    });

    effectRef.destroy();
  }
}
