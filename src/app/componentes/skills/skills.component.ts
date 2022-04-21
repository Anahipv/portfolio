import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Idioma } from 'src/app/interfaces/iidioma';
import { Skill } from 'src/app/interfaces/iskill';
import { IdiomaService } from 'src/app/servicios/idiomas/idioma.service';
import { SkillService } from 'src/app/servicios/skills/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skills!: Skill[];
  public idiomas!: Idioma[];

  constructor(
    private skillService: SkillService,
    private idiomaService: IdiomaService
    ) { 

  }

  ngOnInit(): any {
    this.getSkills();
    this.getIdiomas();
  }

  public getSkills(): any {
    this.skillService.getSkills().subscribe({
      next: (response: Skill[]) => 
        (this.skills = response),
      
      error: (error : HttpErrorResponse) =>
        (alert(error.message))
    })
  }

  public getIdiomas(): any {
    this.idiomaService.getIdiomas().subscribe({
      next: (response: Idioma[]) => 
        (this.idiomas = response),
      
      error: (error : HttpErrorResponse) =>
        (alert(error.message))
    })
  }

}
