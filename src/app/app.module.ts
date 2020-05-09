import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { NbMenuComponent } from '../assets/components/menu/menu.component';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    // NbMenuComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }