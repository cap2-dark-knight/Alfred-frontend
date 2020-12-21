import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import '@angular/common/locales/global/ko';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { NgbCollapseModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AlertTimesFormComponent } from './alert-times-form/alert-times-form.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { KeywordListComponent } from './keyword-list/keyword-list.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { LoginBaseComponent } from './login-base/login-base.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ModalComponent } from './modal/modal.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsComponent } from './news/news.component';
import { RegisterFormComponent } from './register-form/register-form.component';

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
    AlertTimesFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCollapseModule,
    NgbModalModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFTOKEN',
    }),
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
