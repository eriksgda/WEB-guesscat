import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-asidebar',
  imports: [],
  templateUrl: './user-asidebar.component.html',
  styleUrl: './user-asidebar.component.scss'
})
export class UserAsidebarComponent {
  @Output() newGameEvent = new EventEmitter<void>();

  startGame(): void {
    this.newGameEvent.emit();
  }
}
