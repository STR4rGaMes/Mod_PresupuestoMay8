// import { RouterModule, Routes } from '@angular/router';
// import { NgModule } from '@angular/core';

// // modulo contenedor de Modulos
// import { ModulesComponent } from './modules.component';
// import { ClasificadoresComponent } from './but/clasificadores/clasificadores.component';

// // pagina principal y no encontrado


// const routes: Routes = [{
//   path: '',
//   component: ModulesComponent,
//   children: [
//     {
//       path: 'Inicio',
//       component: ClasificadoresComponent,
//     },
//     {
//       path: 'but',
//       loadChildren: () => import('./but/but.module')
//         .then(m => m.ButModule),
//     },
//     {
//       path: 'log',
//       loadChildren: () => import('./log/log.module')
//         .then(m => m.LogModule),
//     },
//     {
//       path: 'rep',
//       loadChildren: () => import('./rep/rep.module')
//         .then(m => m.RepModule),
//     },
//     {
//       path: 'sys',
//       loadChildren: () => import('./sys/sys.module')
//         .then(m => m.SysModule),
//     },
//     {
//       path: 'tre',
//       loadChildren: () => import('./tre/tre.module')
//         .then(m => m.TreModule),
//     },
//     {
//       path: '**',
//       component: ClasificadoresComponent,
//     },
//   ],
// }];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class ModulesRoutingModule {
// }




import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ModulesComponent } from './modules.component';
import { LogComponent } from './log/log.component';

const routes: Routes = [{
  path: '',
  component: ModulesComponent,
  children: [
    {
      path: 'Logistica',
      component: LogComponent,
    },
    {
      path: '',
      redirectTo: 'Logistica',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {
}
