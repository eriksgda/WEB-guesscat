import {Component} from '@angular/core';
import { UserAsidebarComponent } from "../../components/user-asidebar/user-asidebar.component";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {ContentFlag} from '../../types/enums/content-flag.enum';
import {GuessesComponent} from '../../components/guesses/guesses.component';

@Component({
  selector: 'app-game',
  imports: [
    UserAsidebarComponent,
    ReactiveFormsModule,
    CommonModule,
    GuessesComponent,
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent{
  constructor() {
  }

  public contentFlag?: ContentFlag;
  protected readonly ContentFlag = ContentFlag;

  public newGameButtonFLag: boolean = false;

  startGame() {
    this.newGameButtonFLag = true;

    this.contentFlag = ContentFlag.GAME;
  }

  onGameFinished() {
    this.newGameButtonFLag = false;
  }

  getMatchHistory() {
    this.contentFlag = ContentFlag.HISTORY;
  }
}
