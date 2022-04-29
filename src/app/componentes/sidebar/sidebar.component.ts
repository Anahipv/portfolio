import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/ipersona';
import { TraerInfoService } from 'src/app/servicios/traer-info.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public personas!: Persona[];
  public pathComponent : String = "home";

  constructor( private infoService : TraerInfoService ) { 

  }

  ngOnInit(): any {
    this.getPersonas();
  }

  public getPersonas(): any {
    this.infoService.getInfo(this.pathComponent).subscribe({
      next: (response: Persona[]) => 
        (this.personas = response),
      
      error: (error : HttpErrorResponse) =>
        (alert(error.message))
    })
  }

  // public addSkills(addFormSkill: NgForm): void {
  //   this.infoService.addInfo(this.pathSkills, addFormSkill.value ).subscribe({
  //     next: () => {
  //       this.getSkills();
  //       addFormSkill.reset();
  //     },
  //     error: (error: HttpErrorResponse) => {
  //       (alert(error.message));
  //       addFormSkill.reset();
  //     }
  //   })
  // }

  // public editSkills(skills: Skill): void {
  //   this.infoService.editInfo(this.pathSkills, skills ).subscribe({
  //     next: () => this.getSkills(),

  //     error: (error: HttpErrorResponse) => {
  //       (alert(error.message))
  //     }
  //   })
  // }

  // public deleteSkills(skillId: number): void {
  //   this.infoService.deleteInfo(this.pathSkills, skillId ).subscribe({
  //     next: () => this.getSkills(),

  //     error: (error: HttpErrorResponse) => {
  //       (alert(error.message))
  //     }
  //   })
  // }
  
}
