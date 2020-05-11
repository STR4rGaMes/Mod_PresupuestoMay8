import { Routes,ExtraOptions, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LayoutComponent } from './core/layout/layout.component';
import { AuthComponent } from "./core/auth/auth.component";

const routes: Routes = [
 
  {
    path: 'modules',
    loadChildren: () => import('./Modules/modules.module')
      .then(m => m.ModulesModule),
  },
  { path: '', redirectTo: 'modules', pathMatch: 'full' },
  { path: '**', redirectTo: 'modules' },
];


const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}



