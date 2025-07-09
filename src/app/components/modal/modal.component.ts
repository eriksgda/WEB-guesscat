import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ModalType} from '../../types/modal-type.enum';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() type!: ModalType;
  @Output() closed = new EventEmitter();

  onClose() {
    this.closed.emit();
  }
}
