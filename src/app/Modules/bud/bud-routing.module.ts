import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ClasificadoresComponent } from './clasificadores/clasificadores.component';
import { MetasComponent } from './metas/metas.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { TareasComponent } from './tareas/tareas.component';

const routes: Routes = [
  {   path:'clasificadores', component: ClasificadoresComponent },
  {   path:'metas', component: MetasComponent },
  {   path:'proyectos', component: ProyectosComponent },
  {   path:'tareas', component: TareasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudRoutingModule { }
