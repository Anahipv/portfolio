import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/ipersona';
import { LoginService } from 'src/app/servicios/login.service';
import { TraerInfoService } from 'src/app/servicios/traer-info.service';
import { SidebarComponent } from '../sidebar/sidebar.component';


@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  public personas!: Persona[];
  public pathPersona : String = "home";
  public edit!: Persona;
  public isUserLogged: Boolean = false;


  constructor( 
    private infoService : TraerInfoService,
    private loginService : LoginService ) { 

  }

  ngOnInit(): any {
    this.isUserLogged = this.loginService.isUserLogged();
    this.getPersonas();
  }

  public getPersonas(): any {
    this.infoService.getInfo(this.pathPersona).subscribe({
      next: (response: Persona[]) => 
        (this.personas = response),
      
      error: (error : HttpErrorResponse) =>
        (alert(error.message))
    })
  }

  public editPersona(persona: Persona): void {
    this.infoService.editInfo(this.pathPersona, persona ).subscribe({
      next: () => this.getPersonas(),

      error: (error: HttpErrorResponse) => {
        (alert(error.message))
      }
    })
  }

  public setInfo(info : any): void {
    this.edit = info;
  }

}
