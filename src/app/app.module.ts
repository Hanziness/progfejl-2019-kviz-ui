import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeHeroComponent } from './welcome-hero/welcome-hero.component';
import { PageIndexComponent } from './page-index/page-index.component';
import { PageQuizlistComponent } from './page-quizlist/page-quizlist.component';
import { PageQuizfillComponent } from './page-quizfill/page-quizfill.component';
import { PageLeaderboardComponent } from './page-leaderboard/page-leaderboard.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageSignupComponent } from './page-signup/page-signup.component';
import { PageQuizlistItemComponent } from './page-quizlist-item/page-quizlist-item.component';
import { AlertQuizComponent } from './alert-quiz/alert-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeHeroComponent,
    PageIndexComponent,
    PageQuizlistComponent,
    PageQuizfillComponent,
    PageLeaderboardComponent,
    PageLoginComponent,
    PageSignupComponent,
    PageQuizlistItemComponent,
    AlertQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
