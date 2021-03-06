import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageIndexComponent } from "./page-index/page-index.component";
import { PageQuizlistComponent } from './page-quizlist/page-quizlist.component';
import { PageLeaderboardComponent } from './page-leaderboard/page-leaderboard.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageSignupComponent } from './page-signup/page-signup.component';
import { PageQuizfillComponent } from './page-quizfill/page-quizfill.component';
import { ActivateUserService } from './activate-user.service';
import { ActivateVisitorService } from './activate-visitor.service';
import { PageAdminCreateQuizComponent } from './page-admin-create-quiz/page-admin-create-quiz.component';
import { ActivateAdminService } from './activate-admin.service';

const routes: Routes = [
  { path: 'index', redirectTo: '', pathMatch: 'full' },
  { path:'', component: PageIndexComponent },
  { path:'quiz', component: PageQuizlistComponent, canActivate: [ActivateUserService] },
  { path:'leaderboard', component: PageLeaderboardComponent, canActivate: [ActivateUserService] },
  { path:'fill/:quizId', component: PageQuizfillComponent, canActivate: [ActivateUserService] },
  { path:'admin', component: PageAdminCreateQuizComponent, canActivate: [ActivateAdminService] },

  { path:'login', component: PageLoginComponent, canActivate: [ActivateVisitorService] },
  { path:'signup', component: PageSignupComponent, canActivate: [ActivateVisitorService] },

  // TODO Maybe make an error component
  { path: '**', component: PageIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
