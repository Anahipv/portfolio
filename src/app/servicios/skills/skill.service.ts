import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/interfaces/iskill';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getSkills(): Observable<Skill[]>{
    return this.http.get<Skill[]>(`${this.apiServerUrl}/skills`);
  }

  public addSkill(skill: Skill): Observable<Skill[]>{
    return this.http.post<Skill[]>(`${this.apiServerUrl}/skills/add`, skill);
  }

  public editSkill(skill: Skill): Observable<Skill[]>{
    return this.http.put<Skill[]>(`${this.apiServerUrl}/skills/edit`, skill);
  }

  public deleteSkill(skillId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/skills/delete/${skillId}`);
  }
}
