import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// componentes de la primera vista
import {
  FooterComponent,
  HeaderComponent,
  // sidebar tiene que generarce en un array pero por ahora es un componente mas de las vistas
  SidebarComponent
} from './layout';

// componente de login
import{
AuthComponent,
// componente de olvide contraseña
} from './auth';

// componente de vistas no encontradas
import{
  NotFoundComponent
} from './not-found';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  AuthComponent,
  NotFoundComponent
];


@NgModule({
  imports: [CommonModule],
  exports: [CommonModule, ...COMPONENTS],
  declarations: [...COMPONENTS],
})
export class CoreModule { }
