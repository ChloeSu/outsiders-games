import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrocodileGameComponent } from './crocodile-game/crocodile-game.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'crocodile', component: CrocodileGameComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
