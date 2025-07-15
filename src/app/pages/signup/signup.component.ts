import { Component } from '@angular/core';
import { AuthLayoutComponent } from '../../components/auth-layout/auth-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { SignupService } from '../../services/signup.service';

import { SignupForm } from '../../types/models/signup-form.model';
import {LucideAngularModule} from 'lucide-angular';

@Component({
  selector: 'app-signup',
  imports: [
    AuthLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent,
    LucideAngularModule
  ],
  providers: [
    LoginService
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm: FormGroup<SignupForm>;

  constructor(
    private router: Router,
    private signupService: SignupService,
    private toastrService: ToastrService
  ) {
    this.signupForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit() {
    this.signupService.signup(this.signupForm.value.username, this.signupForm.value.password).subscribe({
      next: () => {
        this.toastrService.success("Successful sign up!");
        this.router.navigate(["game"]);
      },
      error: () => this.toastrService.error("Register error!")
    });
  }

  navigate() {
    this.router.navigate(["login"]);
  }
}
