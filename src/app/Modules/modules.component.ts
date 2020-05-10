import { Component } from '@angular/core';

import { MENU_ITEMS } from "./modules-menu";

@Component({
  selector: 'app-modules',
  template: `
    <p>
      modules works!
    </p>
  `,
  styles: []
})


export class ModulesComponent {

  menu = MENU_ITEMS;
}


