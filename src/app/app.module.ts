import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrocodileGameComponent } from './crocodile-game/crocodile-game.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CowGameComponent } from './cow-game/cow-game.component';
import { RabbitGameComponent } from './rabbit-game/rabbit-game.component';
import { HedgehogGameComponent } from './hedgehog-game/hedgehog-game.component';
import { MeerkatGameComponent } from './meerkat-game/meerkat-game.component';
import { SlothGameComponent } from './sloth-game/sloth-game.component';

@NgModule({
  declarations: [
    AppComponent,
    CrocodileGameComponent,
    HomeComponent,
    CowGameComponent,
    RabbitGameComponent,
    HedgehogGameComponent,
    MeerkatGameComponent,
    SlothGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
