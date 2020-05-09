import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from "./layout/layout.component";
import { AuthComponent } from "./auth/auth.component";
import { NotFundComponent } from "./not-fund/not-fund.component";


const components = [
  LayoutComponent,
  AuthComponent,
  NotFundComponent,
];

@NgModule({
  declarations: [components],
  exports: components,
  imports: [
    CommonModule
  ]
})

export class CoreModule { }
