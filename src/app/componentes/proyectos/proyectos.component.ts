import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/interfaces/iproyecto';
import { ProyectoService } from 'src/app/servicios/proyectos/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  public proyectos!: Proyecto[];

  constructor(private proyectosService: ProyectoService) { 

  }

  ngOnInit(): any {
    this.getProyectos();
  }

  public getProyectos(): any {
    this.proyectosService.getProyectos().subscribe({
      next: (response: Proyecto[]) => 
        (this.proyectos = response),
      
      error: (error : HttpErrorResponse) =>
        (alert(error.message))
    })
  }

}
