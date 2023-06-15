import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataCyDirective } from './directives/data-cy.directive';

@NgModule({
  declarations: [
    AppComponent,
    DataCyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
