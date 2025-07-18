import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ModalType} from '../../types/enums/modal-type.enum';
import {LucideAngularModule} from 'lucide-angular';
import {GameResponseDTO} from '../../types/dto/game-responseDTO.type';

@Component({
  selector: 'app-modal',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() type!: ModalType;
  @Output() closed = new EventEmitter();

  @Input() possibleContent?: GameResponseDTO;

  onClose() {
    this.closed.emit();
  }

  protected readonly ModalType = ModalType;
}
