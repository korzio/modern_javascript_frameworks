import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { TranPipe } from './tran.pipe';
import { MygDirective } from './myg.directive';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    TranPipe,
    MygDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
