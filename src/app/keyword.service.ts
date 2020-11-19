import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Keyword } from 'src/models/keyword';
import { MY_KEYWORDS, REC_S_KEYWORDS, MY_S_KEYWORDS } from 'src/mock/keywords'; // TODO: REMOVE LATER

@Injectable({
  providedIn: 'root',
})
export class KeywordService {
  myKeywords: Keyword[] = [];
  mySmartKeywords: Keyword[] = [];
  recSmartKeywords: Keyword[] = [];

  index = 90; // TODO: REMOVE LATER

  constructor() {
    this.myKeywords = MY_KEYWORDS;
    this.mySmartKeywords = MY_S_KEYWORDS;
    this.recSmartKeywords = REC_S_KEYWORDS;
  }

  getMyKeywords(): Observable<Keyword[]> {
    return of(this.myKeywords).pipe(delay(300));
  }

  getMySmartKeywords(): Observable<Keyword[]> {
    return of(this.mySmartKeywords).pipe(delay(300));
  }

  getRecSmartKeywords(): Observable<Keyword[]> {
    return of(this.recSmartKeywords).pipe(delay(300));
  }

  addKeyword(keyword: string): Observable<Keyword[]> {
    this.myKeywords.push({ id: this.index++, value: keyword });
    return of(this.myKeywords).pipe(delay(300));
  }
}
