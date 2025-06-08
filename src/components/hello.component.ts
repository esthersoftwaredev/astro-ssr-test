import { NgIf } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  template: `
    <p>Hello from Angular!!</p>

    <!-- <p *ngIf="show">{{ helpText }}</p> -->
     @if (show()) {
       <p>Hello</p>
     }

    <button (click)="toggle()">Toggle</button>
  `,
})
export class HelloComponent {
  // @Input() helpText!: string;

  show = signal(false);

  toggle() {
    this.show.set(!this.show());
    console.log('Toggle clicked, show:', this.show);
  }
}