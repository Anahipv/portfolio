import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/ipersona';
import { PersonaService } from 'src/app/servicios/persona.service/persona.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public personas!: Persona[];

  constructor(private personasService: PersonaService) { 

  }

  ngOnInit(): any {
    this.getPersonas();
  }

  public getPersonas(): any {
    this.personasService.getPersonas().subscribe({
      next: (response: Persona[]) => 
        (this.personas = response),
      
      error: (error : HttpErrorResponse) =>
        (alert(error.message))
    })
  }
  
}
