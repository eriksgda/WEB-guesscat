import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameResultDTO } from '../../types/dto/game-resultDTO.type';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private apiUrl: string = "http://localhost:8080/game";

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  startGame(): Observable<{ word: string }>{
    const token: string | null = this.authService.getToken();

    if (!token) {
      console.error("Need authentication to continue.");
      return new Observable(observer => observer.error("No authentication token."));
    }

    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`
    });

    return this.httpClient.get<{word: string}>(`${this.apiUrl}/start`, {headers: headers});
  }

  postResult(dto: GameResultDTO): Observable<any>{
    const token: string | null = this.authService.getToken();

    if (!token) {
      console.error("Need authentication to continue.");
      return new Observable(observer => observer.error("No authentication token."));
    }

    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`
    });

    return this.httpClient.post(`${this.apiUrl}/done`, dto, {headers: headers});
  }
}
