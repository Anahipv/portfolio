import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Idioma } from 'src/app/interfaces/iidioma';
import { Skill } from 'src/app/interfaces/iskill';
import { TraerInfoService } from 'src/app/servicios/traer-info.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skills!: Skill[];
  public idiomas!: Idioma[];
  public pathSkills : String = "skills";
  public pathIdiomas : String  = "idioma";

  constructor( private infoService : TraerInfoService ) { 

  }

  ngOnInit(): any {
    this.getSkills();
    this.getIdiomas();
  }

  public getSkills(): any {
    this.infoService.getInfo(this.pathSkills).subscribe({
      next: (response: Skill[]) => 
        (this.skills = response),
      
      error: (error : HttpErrorResponse) =>
        (alert(error.message))
    })
  }

  public getIdiomas(): any {
    this.infoService.getInfo(this.pathIdiomas).subscribe({
      next: (response: Idioma[]) => 
        (this.idiomas = response),
      
      error: (error : HttpErrorResponse) =>
        (alert(error.message))
    })
  }

}
