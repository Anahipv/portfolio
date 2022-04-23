import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/interfaces/ieducacion';
import { ExpLaboral } from 'src/app/interfaces/iexplaboral';
import { TraerInfoService } from 'src/app/servicios/traer-info.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  public edus!: Educacion[];
  public explaborales!: ExpLaboral[];
  public pathEdu : String = "educacion";
  public pathExp : String  = "explaboral";

  constructor( private infoService : TraerInfoService ) { 

  }

  ngOnInit(): any {
    this.getEducaciones();
    this.getExpLaborales();
  }

  public getEducaciones(): any {
    this.infoService.getInfo(this.pathEdu).subscribe({
      next: (response: Educacion[]) => 
        (this.edus = response),
      
      error: (error : HttpErrorResponse) =>
        (alert(error.message))
    })
  }

  public getExpLaborales(): any {
    this.infoService.getInfo(this.pathExp).subscribe({
      next: (response: ExpLaboral[]) => 
        (this.explaborales = response),
      
      error: (error : HttpErrorResponse) =>
        (alert(error.message))
    })
  }

}
