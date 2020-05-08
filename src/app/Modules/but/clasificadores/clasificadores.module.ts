import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasAComponent } from './clas-a/clas-a.component';
import { ClasBComponent } from './clas-b/clas-b.component';

import { ClasAModule } from "./clas-a/clas-a.module";
import { ClasBModule } from './clas-b/clas-b.module';

@NgModule({
  declarations: [ClasAComponent, ClasBComponent],
  imports: [
    CommonModule,
    ClasAModule,
    ClasBModule
  ]
})
export class ClasificadoresModule { }
