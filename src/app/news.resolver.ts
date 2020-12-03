import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { News } from 'src/models/news';
import { NewsService } from './news.service';

@Injectable({
  providedIn: 'root',
})
export class NewsResolver implements Resolve<News[]> {
  constructor(private newsService: NewsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<News[]> {
    return this.newsService.getNews();
  }
}
