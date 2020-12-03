import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BaseComponent } from './base/base.component';
import { KeywordsResolver } from './keywords.resolver';
import { KeywordsComponent } from './keywords/keywords.component';
import { LoggedInGuard } from './logged-in.guard';
import { LoggedOutGuard } from './logged-out.guard';
import { LoginBaseComponent } from './login-base/login-base.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NewsResolver } from './news.resolver';
import { NewsComponent } from './news/news.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { SmartKeywordsResolver } from './smart-keywords.resolver';
import { UserResolver } from './user.resolver';

const routes: Routes = [
  {
    path: 'app',
    canActivate: [LoggedInGuard],
    resolve: {
      user: UserResolver,
      news: NewsResolver,
      keywords: KeywordsResolver,
      smartKeywords: SmartKeywordsResolver,
    },
    runGuardsAndResolvers: 'always',
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
    canActivate: [LoggedOutGuard],
    runGuardsAndResolvers: 'always',
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
