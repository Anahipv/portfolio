import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExpLaboral } from 'src/app/interfaces/iexplaboral';

@Injectable({
  providedIn: 'root'
})
export class ExplaboralService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getExpLaborales(): Observable<ExpLaboral[]>{
    return this.http.get<ExpLaboral[]>(`${this.apiServerUrl}/explaboral`);
  }

  public addExpLaboral(expLaboral: ExpLaboral): Observable<ExpLaboral[]>{
    return this.http.post<ExpLaboral[]>(`${this.apiServerUrl}/explaboral/add`, expLaboral);
  }

  public editExpLaboral(expLaboral: ExpLaboral): Observable<ExpLaboral[]>{
    return this.http.put<ExpLaboral[]>(`${this.apiServerUrl}/explaboral/edit`, expLaboral);
  }

  public deleteExpLaboral(expLaboralId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/explaboral/delete/${expLaboralId}`);
  }
}
