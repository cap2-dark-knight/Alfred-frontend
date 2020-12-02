import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginBaseComponent } from './login-base/login-base.component';
import { BaseComponent } from './base/base.component';
import { KeywordListComponent } from './keyword-list/keyword-list.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { NewsComponent } from './news/news.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ModalComponent } from './modal/modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewsListComponent } from './news-list/news-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginBaseComponent,
    BaseComponent,
    KeywordListComponent,
    KeywordsComponent,
    NewsComponent,
    RegisterFormComponent,
    LoginFormComponent,
    ModalComponent,
    NewsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModalModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFToken',
    }),
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
