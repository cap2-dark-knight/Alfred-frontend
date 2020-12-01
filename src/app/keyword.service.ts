import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Keyword } from 'src/models/keyword';

@Injectable({
  providedIn: 'root',
})
export class KeywordService {
  myKeywords: Keyword[] = [];

  constructor(private http: HttpClient) {}

  getMyKeywords(): Observable<Keyword[]> {
    const URL = '/common/keyword';
    return this.http
      .get<{ keywords: { id: number; keyword: string }[] }>(URL)
      .pipe(
        // tap((res) => console.log(res)),
        catchError((err) => throwError(err)),
        map((res) =>
          res.keywords.map((k) => Object.create({ id: k.id, value: k.keyword }))
        )
      );
  }

  putKeyword(
    keyword: string
  ): Observable<{ success: true; keywords: Keyword[] }> {
    const URL = `/common/keyword/${keyword}/update`;
    return this.http
      .put<{
        result: string;
        info: string;
        keywords: { id: number; keyword: string }[];
      }>(URL, {})
      .pipe(
        // tap((res) => console.log(res)),
        catchError((err) => throwError(err)),
        map((res) =>
          Object.create({
            success: res.result === 'success',
            keywords: res.keywords.map((k) =>
              Object.create({ id: k.id, value: k.keyword })
            ),
          })
        )
      );
  }

  deleteKeyword(
    keyword: string
  ): Observable<{ success: true; keywords: Keyword[] }> {
    const URL = `/common/keyword/${keyword}/delete`;
    return this.http
      .put<{
        result: string;
        info: string;
        keywords: { id: number; keyword: string }[];
      }>(URL, {})
      .pipe(
        // tap((res) => console.log(res)),
        catchError((err) => throwError(err)),
        map((res) =>
          Object.create({
            success: res.result === 'success',
            keywords: res.keywords.map((k) =>
              Object.create({ id: k.id, value: k.keyword })
            ),
          })
        )
      );
  }
}
