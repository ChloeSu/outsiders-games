import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrocodileGameComponent } from './crocodile-game/crocodile-game.component';
import { HomeComponent } from './home/home.component';
import { CowGameComponent } from './cow-game/cow-game.component';
import { RabbitGameComponent } from './rabbit-game/rabbit-game.component';
import { HedgehogGameComponent } from './hedgehog-game/hedgehog-game.component';
import { MeerkatGameComponent } from './meerkat-game/meerkat-game.component';
import { SlothGameComponent } from './sloth-game/sloth-game.component';

const routes: Routes = [
  { path: 'crocodile', component: CrocodileGameComponent },
  { path: 'cow', component: CowGameComponent },
  { path: 'rabbit', component: RabbitGameComponent },
  { path: 'hedgehog', component: HedgehogGameComponent },
  { path: 'meerkat', component: MeerkatGameComponent },
  { path: 'sloth', component: SlothGameComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
