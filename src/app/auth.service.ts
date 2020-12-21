import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  proxy: string = environment.production ? environment.apiUrl : '';

  constructor(private http: HttpClient) {}

  postLogin(email: string, password: string): Observable<boolean> {
    const URL = this.proxy + '/common/accounts/signin';
    return this.http
      .post<{ result: 'success' | 'fail' }>(
        URL,
        { email, password },
        { withCredentials: true }
      )
      .pipe(
        // tap((res) => console.log(res)),
        catchError((err) => throwError(err)),
        map((res) => res.result === 'success')
      );
  }

  postSignup(
    email: string,
    firstName: string,
    lastName: string,
    password: string
  ): Observable<boolean> {
    const URL = this.proxy + '/common/accounts/signup';
    return this.http
      .post<{ result: 'success' | 'fail'; info?: string }>(
        URL,
        {
          email,
          first_name: firstName,
          last_name: lastName,
          password,
        },
        { withCredentials: true }
      )
      .pipe(
        // tap((res) => console.log(res)),
        catchError((err) => throwError(err)),
        map((res) => res.result === 'success')
      );
  }
}
