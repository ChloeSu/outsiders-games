import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrocodileGameComponent } from './crocodile-game/crocodile-game.component';
import { GameHpComponent } from './crocodile-game/common/game-hp/game-hp.component';
import { GameChoiceComponent } from './crocodile-game/common/game-choice/game-choice.component';
import { GameWordComponent } from './crocodile-game/common/game-word/game-word.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CowGameComponent } from './cow-game/cow-game/cow-game.component';

@NgModule({
  declarations: [
    AppComponent,
    CrocodileGameComponent,
    GameHpComponent,
    GameChoiceComponent,
    GameWordComponent,
    HomeComponent,
    CowGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
