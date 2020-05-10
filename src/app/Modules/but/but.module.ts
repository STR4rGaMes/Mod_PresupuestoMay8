import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// componentes
import { TareasComponent } from './tareas/tareas.component';
import { ClasificadoresComponent } from './clasificadores/clasificadores.component';
import { MetasComponent } from './metas/metas.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

// modulos
import { ClasificadoresModule } from './clasificadores/clasificadores.module';




@NgModule({
  declarations: [TareasComponent, ClasificadoresComponent, MetasComponent, ProyectosComponent],
  imports: [
    CommonModule,
    ClasificadoresComponent
  ]
})
export class ButModule { }
