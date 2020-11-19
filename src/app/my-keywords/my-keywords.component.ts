import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Keyword } from 'src/models/keyword';
import { KeywordService } from '../keyword.service';

@Component({
  selector: 'app-my-keywords',
  templateUrl: './my-keywords.component.html',
  styleUrls: ['./my-keywords.component.css'],
})
export class MyKeywordsComponent implements OnInit {
  myKeywords$: Observable<Keyword[]>;
  mySmartKeywords$: Observable<Keyword[]>;
  recSmartKeywords$: Observable<Keyword[]>;

  newKeyword = '';

  constructor(private keywordService: KeywordService) {
    this.myKeywords$ = this.keywordService.getMyKeywords();
    this.mySmartKeywords$ = this.keywordService.getMySmartKeywords();
    this.recSmartKeywords$ = this.keywordService.getRecSmartKeywords();
  }

  ngOnInit(): void {}

  addKeyword(): void {
    if (this.newKeyword.trim() === '') {
      return;
    }
    this.myKeywords$ = this.keywordService.addKeyword(this.newKeyword);
    this.newKeyword = '';
  }
}
