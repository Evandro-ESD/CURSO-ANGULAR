import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() text: string = 'Clique aqui'
  @Input() color: string = 'Clique aqui'
  // evento de click
  @Output('btnClick') eventoClick = new EventEmitter<void>()

  onClick() {
    this.eventoClick.emit()
  }
}
