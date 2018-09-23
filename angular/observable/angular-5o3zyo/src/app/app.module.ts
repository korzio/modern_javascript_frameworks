import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgReduxModule }  from '@angular-redux/store';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule, NgReduxModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
