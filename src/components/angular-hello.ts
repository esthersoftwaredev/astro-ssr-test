import { Component, Input, signal } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
	selector: "app-hello",
	standalone: true,
	imports: [MatButtonModule, MatIconModule],
	template: `
		<p>Hello from Angular!!</p>

		<!-- <p *ngIf="show">{{ helpText }}</p> -->
		@if (show()) {
		<p>Hello</p>
		}

		<button mat-raised-button (click)="toggle()">Toggle</button>
		<mat-icon
			aria-hidden="false"
			aria-label="Example home icon"
			fontIcon="home"
		></mat-icon>
	`,
	styleUrls: ["../styles/global.scss", "./angular-hello.scss"],
})
export class HelloComponent {
	// @Input() helpText!: string;

	show = signal(false);

	toggle() {
		this.show.set(!this.show());
		console.log("Toggle clicked, show:", this.show());
	}
}
