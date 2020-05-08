import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { CommonModule } from '@angular/common';

// importar los componentes de cada moodulo para las rutas
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
export class ButRoutingModule { }
