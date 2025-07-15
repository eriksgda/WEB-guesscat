import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ModalType} from '../../types/enums/modal-type.enum';
import {LucideAngularModule} from 'lucide-angular';

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

  onClose() {
    this.closed.emit();
  }

  protected readonly ModalType = ModalType;
}
