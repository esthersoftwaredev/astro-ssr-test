import { Component, Input, signal } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <p>Hello from Angular!!</p>

    <!-- <p *ngIf="show">{{ helpText }}</p> -->
     @if (show()) {
       <p>Hello</p>
     }

    <button mat-raised-button (click)="toggle()">Toggle</button>
  `,
  styleUrl: '../styles/angular-material.scss',
})
export class HelloComponent {
  // @Input() helpText!: string;

  show = signal(false);

  toggle() {
    this.show.set(!this.show());
    console.log('Toggle clicked, show:', this.show());
  }
}