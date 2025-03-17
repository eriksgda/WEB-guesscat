import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  imports: [],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {
  @Input() mainTitle: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
  @Input() disablePrimaryBtn: boolean = true;

  @Output("submit") onSubmit = new EventEmitter();
  @Output("navegate") onNavegate = new EventEmitter();
  
  submit() {
    this.onSubmit.emit();
  }

  navigate() {
    this.onNavegate.emit();
  }
}
