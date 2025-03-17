import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Area {
  id: number;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class AreaService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAreas(): Observable<Area[]> {
    return this.http.get<Area[]>(`${this.apiUrl}/areas`);
  }

  getAreaById(id: number): Observable<Area> {
    return this.http.get<Area>(`${this.apiUrl}/area/${id}`);
  }

  createArea(area: Partial<Area>): Observable<any> {
    return this.http.post(`${this.apiUrl}/area`, area);
  }

  updateArea(id: number, area: Partial<Area>): Observable<any> {
    return this.http.put(`${this.apiUrl}/area/${id}`, area);
  }

  deleteArea(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/area/${id}`);
  }
}
