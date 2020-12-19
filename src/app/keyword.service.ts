import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Keyword } from 'src/models/keyword';

@Injectable({
  providedIn: 'root',
})
export class KeywordService {
  proxy: string = environment.production ? environment.apiUrl : '';

  constructor(private http: HttpClient) {}

  getMyKeywords(): Observable<Keyword[]> {
    const URL = this.proxy + '/common/keyword';
    return this.http.get<{ keywords: Keyword[] }>(URL).pipe(
      // tap((res) => console.log(res)),
      catchError((err) => throwError(err)),
      map((res) => res.keywords)
    );
  }

  getSmartKeywords(): Observable<Keyword[]> {
    const URL = this.proxy + '/common/keyword/smart';
    return this.http
      .get<{ result: 'success' | 'fail'; smartkeywords: Keyword[] }>(URL)
      .pipe(
        // tap((res) => console.log(res)),
        catchError((err) => throwError(err)),
        map((res) => res.smartkeywords)
      );
  }

  putKeyword(
    keyword: string
  ): Observable<{ success: true; keywords: Keyword[] }> {
    const URL = this.proxy + `/common/keyword/${keyword}/update`;
    return this.http
      .put<{
        result: string;
        info: string;
        keywords: Keyword[];
      }>(URL, {})
      .pipe(
        // tap((res) => console.log(res)),
        catchError((err) => throwError(err)),
        map((res) =>
          Object.create({
            success: res.result === 'success',
            keywords: res.keywords,
          })
        )
      );
  }

  deleteKeyword(
    keyword: string
  ): Observable<{ success: true; keywords: Keyword[] }> {
    const URL = this.proxy + `/common/keyword/${keyword}/delete`;
    return this.http
      .delete<{
        result: string;
        info: string;
        keywords: Keyword[];
      }>(URL, {})
      .pipe(
        // tap((res) => console.log(res)),
        catchError((err) => throwError(err)),
        map((res) =>
          Object.create({
            success: res.result === 'success',
            keywords: res.keywords,
          })
        )
      );
  }
}
