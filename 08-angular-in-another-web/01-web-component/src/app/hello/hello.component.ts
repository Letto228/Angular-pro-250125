import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class HelloComponent {
  @Input() name: string = '';
  @Output() clicked = new EventEmitter<number>();

  onClick() {
    this.clicked.emit(Date.now());
  }
}
