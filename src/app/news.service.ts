import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { News } from 'src/models/news';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  proxy: string = environment.production ? environment.apiUrl : '';

  constructor(private http: HttpClient) {}

  getNews(): Observable<News[]> {
    const URL = this.proxy + '/common/crawldata';
    return this.http
      .get<{ crawled_data: News[] }>(URL, { withCredentials: true })
      .pipe(
        // tap((res) => console.log(res)),
        catchError((err) => throwError(err)),
        map((res) => res.crawled_data)
      );
  }
}
