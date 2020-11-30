import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginBaseComponent } from './login-base/login-base.component';
import { BaseComponent } from './base/base.component';
import { KeywordListComponent } from './keyword-list/keyword-list.component';
import { MyKeywordsComponent } from './my-keywords/my-keywords.component';
import { NewsComponent } from './news/news.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginBaseComponent,
    BaseComponent,
    KeywordListComponent,
    MyKeywordsComponent,
    NewsComponent,
    RegisterFormComponent,
    LoginFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
