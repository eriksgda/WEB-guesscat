import { Component } from '@angular/core';
import { UserAsidebarComponent } from "../../components/user-asidebar/user-asidebar.component";

@Component({
  selector: 'app-game',
  imports: [UserAsidebarComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

}
