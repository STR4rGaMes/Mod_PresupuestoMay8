import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// modulo contenedor de Modulos
import { ModulesComponent } from './modules.component';
import { ButModule } from './but/but.module';

// pagina principal y no encontrado


const routes: Routes = [{
  path: '',
  component: ModulesComponent,
  children: [
    {
      path: 'Inicio',
      component: ButModule,
    },
    {
      path: 'but',
      loadChildren: () => import('./but/but.module')
        .then(m => m.ButModule),
    },
    {
      path: 'log',
      loadChildren: () => import('./log/log.module')
        .then(m => m.LogModule),
    },
    {
      path: 'rep',
      loadChildren: () => import('./rep/rep.module')
        .then(m => m.RepModule),
    },
    {
      path: 'sys',
      loadChildren: () => import('./sys/sys.module')
        .then(m => m.SysModule),
    },
    {
      path: 'tre',
      loadChildren: () => import('./tre/tre.module')
        .then(m => m.TreModule),
    },
    {
      path: '**',
      component: ButModule,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {
}
