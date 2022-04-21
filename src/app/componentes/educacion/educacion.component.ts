import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/interfaces/ieducacion';
import { ExpLaboral } from 'src/app/interfaces/iexplaboral';
import { EducacionService } from 'src/app/servicios/educuacion.service/educacion.service';
import { ExplaboralService } from 'src/app/servicios/explaboral/explaboral.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  public edus!: Educacion[];
  public explaborales!: ExpLaboral[];

  constructor(
    private edusService: EducacionService,
    private expLabService: ExplaboralService
    ) { 

  }

  ngOnInit(): any {
    this.getEducaciones();
    this.getExpLaborales();
  }

  public getEducaciones(): any {
    this.edusService.getEducaciones().subscribe({
      next: (response: Educacion[]) => 
        (this.edus = response),
      
      error: (error : HttpErrorResponse) =>
        (alert(error.message))
    })
  }

  public getExpLaborales(): any {
    this.expLabService.getExpLaborales().subscribe({
      next: (response: ExpLaboral[]) => 
        (this.explaborales = response),
      
      error: (error : HttpErrorResponse) =>
        (alert(error.message))
    })
  }

}
