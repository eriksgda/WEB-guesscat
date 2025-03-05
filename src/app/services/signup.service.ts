import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  apiUrl: string = "http://localhost:8080/cat/auth/register";

  constructor(private httpClient: HttpClient) { }

  signup(username: string, password: string) {
    return this.httpClient.post<LoginResponse>(this.apiUrl, { username, password }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token);
      })
    )
  }
}
