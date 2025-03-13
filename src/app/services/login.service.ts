import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = "http://localhost:8080/cat/auth/login";

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  login(username: string, password: string) {
    return this.httpClient.post<LoginResponse>(this.apiUrl, { username, password }).pipe(
      tap((value) => {
        this.authService.setAuthToken(value.token);
      })
    )
  }
}
