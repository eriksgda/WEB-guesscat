import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = "http://localhost:8080/cat/auth/login";

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string) {
    return this.httpClient.post<LoginResponse>(this.apiUrl, { username, password }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token);
      })
    )
  }
}
