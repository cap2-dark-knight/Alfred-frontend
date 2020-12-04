import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User | undefined;

  constructor(private http: HttpClient) {}

  getUser(): Observable<User | undefined> {
    if (this.user) {
      return of(this.user);
    }
    const URL = '/common/accounts/user';
    return this.http.get<{ result: 'success' | 'fail'; user: User }>(URL).pipe(
      // tap((res) => console.log(res)),
      catchError((err) => {
        throwError(err);
        return of(undefined);
      }),
      map((res) => (this.user = res ? res.user : undefined))
    );
  }

  getLogout(): Observable<boolean> {
    this.user = undefined;
    const URL = '/common/accounts/signout';
    return this.http.get<{ result: 'success' | 'fail' }>(URL).pipe(
      // tap((res) => console.log(res)),
      catchError((err) => throwError(err)),
      map((res) => res.result === 'success')
    );
  }
}
