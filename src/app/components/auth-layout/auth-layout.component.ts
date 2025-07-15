import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalType } from '../../types/enums/modal-type.enum';
import {ModalComponent} from '../modal/modal.component';
import {LucideAngularModule} from 'lucide-angular';

@Component({
  selector: 'app-auth-layout',
  imports: [
    ModalComponent,
    LucideAngularModule
  ],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {
  @Input() mainTitle: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
  @Input() disablePrimaryBtn: boolean = true;

  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }

  navigate() {
    this.onNavigate.emit();
  }

  isModalOpen: boolean = false;
  type: ModalType = ModalType.CLOSE;

  toggleModal(type: ModalType) {
    this.type = type;
    this.isModalOpen = !this.isModalOpen;
  }

  protected readonly ModalType = ModalType;
}
