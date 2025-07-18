import {Component, EventEmitter, HostListener, Output} from '@angular/core';
import {GameService} from '../../services/game/game.service';
import {KeyActionService} from '../../services/game/key-action.service';
import {KeyAction} from '../../types/enums/key-action.enum';
import {LetterState} from '../../types/enums/letter-state.enum';
import {GameResultDTO} from '../../types/dto/game-resultDTO.type';
import {ModalType} from '../../types/enums/modal-type.enum';
import {GameResponseDTO} from '../../types/dto/game-responseDTO.type';
import {ModalComponent} from '../modal/modal.component';

interface Guess {
  letters: Letter[];
}

interface Letter {
  char: string;
  state: LetterState;
}

@Component({
  selector: 'app-guesses',
  imports: [
    ModalComponent
  ],
  templateUrl: './guesses.component.html',
  styleUrl: './guesses.component.scss'
})
export class GuessesComponent {
  @Output() gameFinished = new EventEmitter<void>();
  public possibleContent?: GameResponseDTO;
  private isGameFinished: boolean = false;

  readonly guesses: Guess[] = [];

  private word: string = "";
  private currentLetterIndex = 0;
  private currentLineIndex = 0;


  constructor(private keyActionService: KeyActionService, private gameService: GameService) {
    this.gameService.startGame().subscribe({
      next: (data) => {
        this.word = data.word;
        this.resetGameState();
      },
      error: () => {
        console.error("Error starting game.");
      },
      complete: () => {
        console.log("Game started.");
      }
    });
  }

  private resetGameState() {
    this.guesses.length = 0;
    this.currentLetterIndex = 0;
    this.currentLineIndex = 0;
    this.possibleContent = undefined;
    this.isGameFinished = false;

    for (let i = 0; i < this.word.length; i++) {
      const letters: Letter[] = [];
      for (let j = 0; j < this.word.length; j++) {
        letters.push({char: "", state: LetterState.PENDING});
      }
      this.guesses.push({letters: letters});
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key;
    const action = this.keyActionService.getKeyAction(key);

    if (!action) return;

    event.preventDefault();
    this.handleKeyAction(action, key);
  }

  private handleKeyAction(type: KeyAction, key: string) {
    console.log("type: " + type + ", key: " + key);
    if (this.isGameFinished) return;

    switch (type) {
      case KeyAction.SPACE:
        if (this.currentLetterIndex < this.word.length - 1) {
          this.currentLetterIndex++;
        }
        break;
      case KeyAction.BACKSPACE:
         if (this.currentLetterIndex > 0) {
           this.currentLetterIndex--;
           this.guesses[this.currentLineIndex].letters[this.currentLetterIndex].char = "";
         }
        break;
      case KeyAction.ENTER:
        const guessToSubmit = this.guesses[this.currentLineIndex];
        const isComplete = guessToSubmit.letters.every(letter => letter.char !== "");

        if (!isComplete) {
          return; // error message
        }

        this.validateGuess(guessToSubmit);

        // win
        if (guessToSubmit.letters.every(letter => letter.state === LetterState.CORRECT)) {
          this.isGameFinished = true;
          this.submitGameResults(ModalType.WIN);
          return;
        }

        this.currentLineIndex++;
        this.currentLetterIndex = 0;

        // defeat
        if (this.currentLineIndex >= this.guesses.length) {
          this.isGameFinished = true;
          this.submitGameResults(ModalType.DEFEAT);
          return;
        }
        break;
      case KeyAction.ARROW_LEFT:
        if (this.currentLetterIndex > 0) {
          this.currentLetterIndex--;
        }
        break;
      case KeyAction.ARROW_RIGHT:
        if (this.currentLetterIndex < this.word.length - 1) {
          this.currentLetterIndex++;
        }
        break;
      case KeyAction.LETTER:
        if (this.currentLineIndex >= this.guesses.length) return;

        const currentGuess = this.guesses[this.currentLineIndex];
        if (this.currentLetterIndex >= currentGuess.letters.length) return;

        currentGuess.letters[this.currentLetterIndex].char = key;
        this.currentLetterIndex++;
        break;
      default:
        break;
    }
  }

  private validateGuess(guess: Guess) {
    const wordArray = this.word.split("");
    const guessArray = guess.letters.map(letter => letter.char);

    for (let i = 0; i < this.word.length; i++) {
      if (guessArray[i] === wordArray[i]) {
        guess.letters[i].state = LetterState.CORRECT;
        wordArray[i] = null!;
        guessArray[i] = null!;
      }
    }

    for (let i = 0; i < this.word.length; i++) {
      if (guessArray[i] && wordArray.includes(guessArray[i])) {
        guess.letters[i].state = LetterState.PARTIAL_CORRECT;
        const index = wordArray.indexOf(guessArray[i]);
        wordArray[index] = null!;
      } else if (guessArray[i]) {
        guess.letters[i].state = LetterState.WRONG;
      }
    }
  }

  private submitGameResults(result: ModalType) {
    const now = new Date();

    const validGuesses: string[] = this.guesses.slice(0, this.currentLineIndex + 1)
      .map(guess => guess.letters.map(letter => letter.char).join(""));

    const payload: GameResultDTO = {
      word: this.word,
      guesses: validGuesses,
      playedIn: now.toISOString()
    }

    this.gameService.postResult(payload).subscribe({
      next: (response: GameResponseDTO) => {
        console.log("Game result submitted.");
        this.possibleContent = response;

        this.toggleModal(result);
      },
      error: () => {
        console.error("Error submitting game result.");
      }
    });
  }

  isModalOpen: boolean = false;
  type: ModalType = ModalType.CLOSE;

  toggleModal(type: ModalType) {
    this.type = type;
    this.isModalOpen = !this.isModalOpen;

    if (type === ModalType.CLOSE) {
      this.gameFinished.emit();
    }
  }

  protected readonly ModalType = ModalType;
  protected readonly LetterState = LetterState;
}
