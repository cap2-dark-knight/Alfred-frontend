import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { Keyword } from 'src/models/keyword';
import { KeywordService } from './keyword.service';

@Injectable({
  providedIn: 'root',
})
export class SmartKeywordsResolver implements Resolve<Keyword[]> {
  constructor(private keywordService: KeywordService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Keyword[]> {
    return this.keywordService.getSmartKeywords();
  }
}
