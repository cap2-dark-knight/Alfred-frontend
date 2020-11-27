import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { BaseComponent } from './base/base.component';
import { KeywordListComponent } from './keyword-list/keyword-list.component';
import { MyKeywordsComponent } from './my-keywords/my-keywords.component';
import { MemberComponent } from './member/member.component';
import { NewsComponent } from './news/news.component';
import { JoinComponent } from './join/join.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BaseComponent,
    KeywordListComponent,
    MyKeywordsComponent,
    MemberComponent,
    NewsComponent,
    JoinComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
