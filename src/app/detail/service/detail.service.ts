import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Photo } from '../../interface/photo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getPhoto = (id: number): Observable<Photo> => {
    return this.http.get<Photo>(`${this.baseUrl}/photos/${id}`);
  };
}
