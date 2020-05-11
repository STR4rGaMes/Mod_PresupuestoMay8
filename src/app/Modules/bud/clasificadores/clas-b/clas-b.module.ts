import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasBDetComponent } from './clas-b-det/clas-b-det.component';
import { ClasBFiltersComponent } from './clas-b-filters/clas-b-filters.component';
import { ClasBTableComponent } from './clas-b-table/clas-b-table.component';
import { ClasBControlsComponent } from './clas-b-controls/clas-b-controls.component';

@NgModule({
  declarations: [ ClasBDetComponent, ClasBFiltersComponent, ClasBTableComponent, ClasBControlsComponent],
  imports: [
    CommonModule
  ]
})
export class ClasBModule { }
