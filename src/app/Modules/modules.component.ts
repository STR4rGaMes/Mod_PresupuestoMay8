import { Component } from '@angular/core';

import { MENU_ITEMS } from "./modules-menu";

@Component({
  selector: 'app-modules',
  template: `
  Hola mudno
  `,
  styles: []
})


export class ModulesComponent {

  menu = MENU_ITEMS;
}


