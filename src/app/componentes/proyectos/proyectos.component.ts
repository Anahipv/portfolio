import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/interfaces/iproyecto';
import { TraerInfoService } from 'src/app/servicios/traer-info.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  public proyectos!: Proyecto[];
  public pathComponent : String = "proyectos";

  constructor( private infoService : TraerInfoService ) { 

  }

  ngOnInit(): any {
    this.getProyectos();
  }

  public getProyectos(): any {
    this.infoService.getInfo(this.pathComponent).subscribe({
      next: (response: Proyecto[]) => 
        (this.proyectos = response),
      
      error: (error : HttpErrorResponse) =>
        (alert(error.message))
    })
  }

}
