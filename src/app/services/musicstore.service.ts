import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { inject, tick } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { STORE_API_URL } from '../app-injection-tokens';
import { Music } from '../models/music';

@Injectable({
  providedIn: 'root'
})
export class MusicstoreService {
  private baseApiUrl = `${this.apiUrl}api/`

  constructor(private http: HttpClient, @Inject(STORE_API_URL) private apiUrl: string) { }

  getCatalog(): Observable<Music[]>{
    return this.http.get<Music[]>(`${this.baseApiUrl}musics`)
  }

  getUploads(): Observable<Music[]>{
    return this.http.get<Music[]>(`${this.baseApiUrl}playlists`)
  }

}
