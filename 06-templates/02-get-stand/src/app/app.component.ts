import { Component, ElementRef, ViewChild } from '@angular/core';
import { CatComponent } from './animals/cat/cat.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contentchildren-by-service';

  // @ViewChild('catComp')
  @ViewChild(CatComponent)
  // @ViewChild(DIToken)
  private catComponent: CatComponent | undefined;

  @ViewChild(CatComponent, {read: ElementRef})
  private catElement: ElementRef | undefined;
}
