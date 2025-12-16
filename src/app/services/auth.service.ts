import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly AUTH_ACCESS_TOKEN_KEY = "auth-access-token";
  private readonly AUTH_REFRESH_TOKEN_KEY = "auth-refresh-token"

  constructor(private router: Router) { }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem(this.AUTH_ACCESS_TOKEN_KEY);
  }

  setAuthTokens(access_token: string, refresh_token: string): void {
    sessionStorage.setItem(this.AUTH_ACCESS_TOKEN_KEY, access_token);
    sessionStorage.setItem(this.AUTH_REFRESH_TOKEN_KEY, refresh_token)
  }

  clearAuthToken(): void {
    sessionStorage.clear();
    this.router.navigate(["/login"]);
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.AUTH_ACCESS_TOKEN_KEY);
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
