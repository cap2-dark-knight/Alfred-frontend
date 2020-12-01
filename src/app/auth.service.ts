import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  postLogin(email: string, password: string): Observable<boolean> {
    const URL = '/common/accounts/signin';
    return this.http
      .post<{ result: 'success' | 'fail' }>(URL, { email, password })
      .pipe(
        // tap((res) => console.log(res)),
        catchError((err) => throwError(err)),
        map((res) => res.result === 'success')
      );
  }

  getLogout(): Observable<boolean> {
    const URL = '/common/accounts/signout';
    return this.http.get<{ result: 'success' | 'fail' }>(URL).pipe(
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
    const URL = '/common/accounts/signup';
    return this.http
      .post<{ result: 'success' | 'fail'; info?: string }>(URL, {
        email,
        first_name: firstName,
        last_name: lastName,
        password,
      })
      .pipe(
        // tap((res) => console.log(res)),
        catchError((err) => throwError(err)),
        map((res) => res.result === 'success')
      );
  }
}
