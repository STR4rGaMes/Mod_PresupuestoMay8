import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [AuthComponent, NotFoundComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
