import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/ipersona';
import { TraerInfoService } from 'src/app/servicios/traer-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public personas!: Persona[];
  public pathPersona: String = "home";

  constructor( private infoService : TraerInfoService ) { 

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

}
