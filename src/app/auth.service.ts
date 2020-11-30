import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable, throwError } from 'rxjs';
import { catchError, delay, map, tap, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  postLogin(username: string, password: string): Observable<boolean> {
    const URL = '127.0.0.1:8000/accounts/signin';
    return of(password !== 'false').pipe(delay(300)); // FIXME: change later
    // return this.http
    //   .post<{ ok: boolean }>(URL, { username, password })
    //   .pipe(
    //     tap((res) => console.log(res)),
    //     map((res) => res.ok)
    //   );
  }

  postSignup(email: string, password: string): Observable<boolean> {
    const URL = '127.0.0.1:8000/accounts/signup';
    return of(password !== 'false').pipe(delay(300)); // FIXME: change later
    // return this.http
    //   .post<{ ok: boolean }>(URL, { username, password })
    //   .pipe(
    //     tap((res) => console.log(res)),
    //     map((res) => res.ok)
    //   );
  }
}
