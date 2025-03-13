import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly AUTH_TOKEN_KEY = "auth-token";

  constructor(private router: Router) { }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem(this.AUTH_TOKEN_KEY);
  }

  setAuthToken(token: string): void {
    sessionStorage.setItem(this.AUTH_TOKEN_KEY, token);
  }

  clearAuthToken(): void {
    sessionStorage.clear();
    this.router.navigate(["/login"]);
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.AUTH_TOKEN_KEY);
  }
}
