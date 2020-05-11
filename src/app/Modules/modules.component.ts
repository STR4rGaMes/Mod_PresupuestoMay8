import { Component } from '@angular/core';

import { MENU_ITEMS } from "./modules-menu";

@Component({
  selector: 'app-modules',
  template: `
    <app-layout>
    
    <router-outlet></router-outlet>
    Hola mudno
    </app-layout>
  `,
  styles: []
})


export class ModulesComponent {

  menu = MENU_ITEMS;
}


