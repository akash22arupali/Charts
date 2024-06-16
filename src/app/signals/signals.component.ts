import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions = signal<string[]>([]);
  counter = signal(0);

  increment() {
    //this.counter.update((oldcounter)=> oldcounter+1);
    this.counter.set(this.counter() + 1);
    this.actions.mutate((oldActions) => oldActions.push('Increment'));
    //this.actions.push('INCREMENT');
  }

  decrement() {
    this.counter.set(this.counter() - 1);
    this.actions.mutate((oldActions) => [...oldActions, 'Decrement']);
    // this.actions.push('DECREMENT');
  }
}
