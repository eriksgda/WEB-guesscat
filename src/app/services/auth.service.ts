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

  getUsername(): string | null {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    try {
      const payloadBase64 = token.split('.')[1];
      const payloadJson = atob(payloadBase64);
      const payload = JSON.parse(payloadJson);
      return payload.username || null;
    } catch (error) {
      console.error("Erro ao decodificar o token:", error);
      return null;
    }
  }
}
