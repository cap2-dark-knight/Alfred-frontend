import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { News } from 'src/models/news';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getNews(): Observable<News[]> {
    const URL = '/common/crawldata';
    return this.http.get<{ crawled_data: News[] }>(URL).pipe(
      // tap((res) => console.log(res)),
      catchError((err) => throwError(err)),
      map((res) => res.crawled_data)
    );
  }
}
