import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idioma } from 'src/app/interfaces/iidioma';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getIdiomas(): Observable<Idioma[]>{
    return this.http.get<Idioma[]>(`${this.apiServerUrl}/idioma`);
  }

  public addIdioma(idioma: Idioma): Observable<Idioma[]>{
    return this.http.post<Idioma[]>(`${this.apiServerUrl}/idioma/add`, idioma);
  }

  public editIdioma(idioma: Idioma): Observable<Idioma[]>{
    return this.http.put<Idioma[]>(`${this.apiServerUrl}/idioma/edit`, idioma);
  }

  public deleteIdioma(idiomaId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/idioma/delete/${idiomaId}`);
  }
}
