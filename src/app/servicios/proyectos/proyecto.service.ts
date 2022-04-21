import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from 'src/app/interfaces/iproyecto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getProyectos(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(`${this.apiServerUrl}/proyectos`);
  }

  public addProyecto(proyecto: Proyecto): Observable<Proyecto[]>{
    return this.http.post<Proyecto[]>(`${this.apiServerUrl}/proyectos/add`, proyecto);
  }

  public editProyecto(proyecto: Proyecto): Observable<Proyecto[]>{
    return this.http.put<Proyecto[]>(`${this.apiServerUrl}/Proyectos/edit`, proyecto);
  }

  public deleteProyecto(proyectoId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/Proyectos/delete/${proyectoId}`);
  }
}
