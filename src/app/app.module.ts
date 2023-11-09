import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterGroupComponent } from './counter-group/counter-group.component';
import { CouterComponent } from './counter-group/couter/couter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterGroupComponent,
    CouterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
