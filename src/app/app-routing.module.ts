import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { MyKeywordsComponent } from './my-keywords/my-keywords.component';

const routes: Routes = [
  {
    path: 'app',
    component: BaseComponent,
    children: [
      {
        path: '',
        component: MyKeywordsComponent,
      },
    ],
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
