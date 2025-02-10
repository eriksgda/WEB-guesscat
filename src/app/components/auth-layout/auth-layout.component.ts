import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  imports: [],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
}
