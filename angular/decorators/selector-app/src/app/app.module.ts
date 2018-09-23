import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { WakaWakaDirective } from './waka-waka.directive';
import { TheMyDictionaryComponent } from './the-my-dictionary/the-my-dictionary.component';
import { TheGameComponent } from './the-game/the-game.component';
import { TheSettingsComponent } from './the-settings/the-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    WakaWakaDirective,
    TheMyDictionaryComponent,
    TheGameComponent,
    TheSettingsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
