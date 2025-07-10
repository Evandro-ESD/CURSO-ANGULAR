import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() text: string = 'Clique aqui'
  @Input() type: 'button' | 'submit' = 'button'
  @Output() clique = new EventEmitter()

  onClick(event: Event){
    this.clique.emit(event)
  }
}
