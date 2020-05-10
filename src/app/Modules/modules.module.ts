
import { NgModule } from '@angular/core';


import { CoreModule } from '../@core/core.module';
import { ModulesComponent } from './modules.component';
import { ModulesRoutingModule } from "./modules-routing.module";
import { LogModule } from './log/log.module';
@NgModule({
  imports: [
    ModulesRoutingModule,
    CoreModule,

    LogModule
  ],
  declarations: [
    ModulesComponent
  ],
})
export class ModulesModule {
}
