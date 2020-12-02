import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseComponent } from './base/base.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { NewsComponent } from './news/news.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginBaseComponent } from './login-base/login-base.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginGuard } from './login.guard';
import { LoggedInGuard } from './logged-in.guard';
import { UserResolver } from './user.resolver';
import { NewsResolver } from './news.resolver';
import { KeywordsResolver } from './keywords.resolver';
import { SmartKeywordsResolver } from './smart-keywords.resolver';

const routes: Routes = [
  {
    path: 'app',
    canActivate: [LoginGuard],
    resolve: {
      user: UserResolver,
      news: NewsResolver,
      keywords: KeywordsResolver,
      smartKeywords: SmartKeywordsResolver,
    },
    component: BaseComponent,
    children: [
      {
        path: 'news',
        component: NewsComponent,
      },
      {
        path: 'keywords',
        component: KeywordsComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'news',
      },
    ],
  },
  {
    path: 'login',
    canActivate: [LoggedInGuard],
    component: LoginBaseComponent,
    children: [
      {
        path: 'register',
        component: RegisterFormComponent,
      },
      {
        path: '',
        component: LoginFormComponent,
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/app/news',
  },
  {
    path: '**',
    redirectTo: '/app/news',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
