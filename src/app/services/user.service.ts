import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { MatchHistoryDTO } from '../types/match-historyDTO.type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = "http://localhost:8080/cat/account";

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getUserMatchHistory(): Observable<MatchHistoryDTO>{
    const token: string | null = this.authService.getToken();

    if (!token) {
      console.error("Need authentication to continue.");
      return new Observable(observer => observer.error("No authentication token."));;
    }

    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`
    });

    return this.httpClient.get<MatchHistoryDTO>(`${this.apiUrl}/history`, {headers: headers});
  }
}
