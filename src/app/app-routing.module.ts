import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BibliotecaHomeComponent } from './biblioteca-home/biblioteca-home.component';
import { BibliotecaRankingComponent } from './biblioteca-ranking/biblioteca-ranking.component';

const routes: Routes = [
  {
    path:"",redirectTo: "home",
    pathMatch: "full"
  },
  {
    path:"home", component: BibliotecaHomeComponent
  },
  {
    path: "ranking", component: BibliotecaRankingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
