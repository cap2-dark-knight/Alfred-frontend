import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { MyKeywordsComponent } from './my-keywords/my-keywords.component';
import { NewsComponent } from './news/news.component';
import { JoinComponent } from './join/join.component';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';

const routes: Routes = [
  {
    path: 'app',
    component: BaseComponent,
    children: [
      {
        path: '',
        component: NewsComponent,
      },
      {
        path: 'my-keywords',
        component: MyKeywordsComponent,
      },
      {
        path: 'member',
        component: MemberComponent,
      },
      {
        path: 'news',
        component: NewsComponent,
      },
    ]
  },
  {
    path: 'app/login',
    component: LoginComponent,
  },
  {
    path: 'app/join',
    component: JoinComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
