import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasAControlsComponent } from './clas-a-controls/clas-a-controls.component';
import { ClasAFiltersComponent } from './clas-a-filters/clas-a-filters.component';
import { ClasATableComponent } from './clas-a-table/clas-a-table.component';


@NgModule({
  declarations: [ClasAControlsComponent, ClasAFiltersComponent, ClasATableComponent],
  imports: [
    CommonModule
  ]
})
export class ClasAModule { }
