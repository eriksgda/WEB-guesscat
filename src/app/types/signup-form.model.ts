import { FormControl } from '@angular/forms';

export interface SignupForm {
  username: FormControl,
  password: FormControl,
  passwordConfirm: FormControl
}