import { Injectable } from '@angular/core';
import { KeyAction } from '../../types/enums/key-action.enum';

@Injectable({
  providedIn: 'root'
})
export class KeyActionService {
  constructor() { }

  public getKeyAction(key: string): KeyAction | null {
    if (key === KeyAction.SPACE) return KeyAction.SPACE;
    if (key === KeyAction.BACKSPACE) return KeyAction.BACKSPACE;
    if (key === KeyAction.ENTER) return KeyAction.ENTER;
    if (key === KeyAction.ARROW_LEFT) return KeyAction.ARROW_LEFT;
    if (key === KeyAction.ARROW_RIGHT) return KeyAction.ARROW_RIGHT;
    if (/^[a-zA-Z]$/.test(key)) return KeyAction.LETTER;
    return null;
  }
}
