import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {rootRouterConfig } from './app.routes'

import { AppComponent } from './app.component';
import { View1Component } from './view/view1/view1.component';
import { View2Component } from './view/view2/view2.component';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
