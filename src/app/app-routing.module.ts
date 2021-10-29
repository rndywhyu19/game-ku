import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LeaderboardComponent } from "./leaderboard/leaderboard.component";
import { ProfileComponent } from "./profile/profile.component";
import { TournamnetComponent } from "./tournamnet/tournamnet.component";

const routes: Routes = [
  {path:'profile',component:ProfileComponent},
  {path:'tournament',component:TournamnetComponent},
  {path:'leaderboard',component:LeaderboardComponent},
  {path:'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }