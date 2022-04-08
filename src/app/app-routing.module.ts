import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sobre-mi', component: SobreMiComponent},
  {path: 'edu-exp', component: EducacionComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'skills', component: SkillsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
