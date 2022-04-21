import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from 'src/app/interfaces/ieducacion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getEducaciones(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.apiServerUrl}/educacion`);
  }

  public addEducacion(educacion: Educacion): Observable<Educacion[]>{
    return this.http.post<Educacion[]>(`${this.apiServerUrl}/educacion/add`, educacion);
  }

  public editEducacion(educacion: Educacion): Observable<Educacion[]>{
    return this.http.put<Educacion[]>(`${this.apiServerUrl}/educacion/edit`, educacion);
  }

  public deleteEducacion(educacionId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/educacion/delete/${educacionId}`);
  }
}
