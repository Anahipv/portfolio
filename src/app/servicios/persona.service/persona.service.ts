import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../../interfaces/ipersona';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getPersonas(): Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.apiServerUrl}/home`);
  }

  public addPersona(persona: Persona): Observable<Persona[]>{
    return this.http.post<Persona[]>(`${this.apiServerUrl}/home/add`, persona);
  }

  public editPersona(persona: Persona): Observable<Persona[]>{
    return this.http.put<Persona[]>(`${this.apiServerUrl}/home/edit`, persona);
  }

  public deletePersona(personaId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/home/delete/${personaId}`);
  }
}
