import { HttpErrorResponse } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/interfaces/ipersona';
import { TraerInfoService } from 'src/app/servicios/traer-info.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public personas!: Persona[];
  public pathPersona : String = "home";
  public edit! : Persona;
  public router!: Router;

  constructor( private infoService : TraerInfoService, private ngZone : NgZone ) { 

  }

  ngOnInit(): any {
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

  // public reload() {
  //   this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  //   this.router.onSameUrlNavigation = 'reload';
  //   this.ngZone.run(() => {this.router.navigate([this.router.url])})
  // }
  
}
