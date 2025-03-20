import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-asidebar',
  imports: [],
  templateUrl: './user-asidebar.component.html',
  styleUrl: './user-asidebar.component.scss'
})
export class UserAsidebarComponent implements OnInit{
  @Output() newGameEvent = new EventEmitter<void>();
  @Output() newHistoryEvent = new EventEmitter<void>();

  username: string = "GUESSCATGAME";
  
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    const aux = this.authService.getUsername();

    if (!aux) {
      return;
    }

    this.username = aux;
  }

  startGame(): void {
    this.newGameEvent.emit();
  }

  viewMatchHistory(): void {
    this.newHistoryEvent.emit();
  }
}
