import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { LayoutComponent } from './Core/layout/layout.component';
import { AuthComponent } from "./core/auth/auth.component";
import { NotFundComponent } from "./Core/not-fund/not-fund.component";

// const moduleRoutes: Routes = [
// 
//   {
//     path:'bud',
//     loadChildren:() => import('./Modules/but/but.module')
//       .then(m => m.ButModule)
//   },
//   {
//     path:'log',
//     loadChildren:() => import('./Modules/log/log.module')
//       .then(m => m.LogModule)
//   },
//   {
//     path:'rep',
//     loadChildren:() => import('./Modules/rep/rep.module')
//       .then(m=> m.RepModule)
//   },
//   {
//     path:'sys',
//     loadChildren:() => import('./Modules/sys/sys.module')
//       .then(m=> m.SysModule)
//   },
//   {
//     path:'tre',
//     loadChildren:() => import('./Modules/tre/tre.module')
//       .then(m=> m.TreModule)
//   }
// ]

const routes: Routes = [
 
  {
    path: 'modules',
    loadChildren: () => import('./Modules/modules.module')
      .then(m => m.ModulesModule),
  },
  { path: '', redirectTo: 'modules', pathMatch: 'full' },
  { path: '**', redirectTo: 'modules' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



