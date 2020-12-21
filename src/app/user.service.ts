import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User | undefined;
  proxy: string = environment.production ? environment.apiUrl : '';

  constructor(private http: HttpClient) {}

  getUser(): Observable<User | undefined> {
    if (this.user) {
      return of(this.user);
    }
    const URL = this.proxy + '/common/accounts/user';
    return this.http
      .get<{ result: 'success' | 'fail'; user: User }>(URL, {
        withCredentials: true,
      })
      .pipe(
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
    const URL = this.proxy + '/common/accounts/signout';
    return this.http
      .get<{ result: 'success' | 'fail' }>(URL, { withCredentials: true })
      .pipe(
        // tap((res) => console.log(res)),
        catchError((err) => throwError(err)),
        map((res) => res.result === 'success')
      );
  }

  getAlertTimes(): Observable<User['alert_times']> {
    const URL = this.proxy + '/common/alert_time';
    return this.http
      .get<{ alert_times: User['alert_times'] }>(URL, { withCredentials: true })
      .pipe(
        // tap((res) => console.log(res)),
        catchError((err) => throwError(err)),
        map((res) => res.alert_times)
      );
  }

  postAlertTimes(
    alertTimes: User['alert_times']
  ): Observable<{
    result: boolean;
    alertTimes?: User['alert_times'];
  }> {
    const URL = this.proxy + '/common/alert_time';
    return this.http
      .post<{
        result: 'success' | 'fail';
        alert_times?: User['alert_times'];
        info?: string;
      }>(URL, { alert_times: alertTimes }, { withCredentials: true })
      .pipe(
        // tap((res) => console.log(res)),
        catchError((err) => {
          throwError(err);
          return of({ result: 'fail', alert_times: [] });
        }),
        map((res) =>
          Object.create({
            result: res.result === 'success',
            alertTimes: res.alert_times,
          })
        )
      );
  }
}
