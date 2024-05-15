import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../../interface/photo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getPhotosList = (): Observable<Photo[]> => {
    return this.http.get<Photo[]>(`${this.baseUrl}/photos`);
  };
}
