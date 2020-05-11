
import { NgModule } from '@angular/core';


import { CoreModule } from '../core/core.module';
import { ModulesComponent } from './modules.component';
import { ModulesRoutingModule } from "./modules-routing.module";
// import { LogModule } from './log/log.module';
import { ButModule} from "./but/but.module";
@NgModule({
  imports: [
    ModulesRoutingModule,
    CoreModule,
    ButModule,
    // LogModule
  ],
  declarations: [
    ModulesComponent
  ],
})
export class ModulesModule {
}
