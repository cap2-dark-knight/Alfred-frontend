import { Component, OnInit } from '@angular/core';

import { NewsService } from '../news.service';
import { News } from 'src/models/news';
import { Keyword } from 'src/models/keyword';
import { KeywordService } from '../keyword.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  keywords: Keyword[] = [];
  news: News[] = [];
  selectedKeyword: Keyword | undefined;
  selectedNews: News[] = [];

  constructor(
    private newsService: NewsService,
    private keywordService: KeywordService
  ) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe((res) => {
      this.news = res;
      this.selectedNews = this.news;
    });
    this.keywordService
      .getMyKeywords()
      .subscribe((res) => (this.keywords = res));
  }

  onKeywordSelect(id: number): void {
    const index: number = this.keywords.findIndex((k) => k.id === id);
    if (index !== -1) {
      if (this.selectedKeyword === this.keywords[index]) {
        this.selectedKeyword = undefined;
        this.selectedNews = this.news;
      } else {
        this.selectedKeyword = this.keywords[index];
        this.selectedNews = this.news.filter(
          (n) => n.keywords_id === this.selectedKeyword?.id
        );
      }
    }
  }
}
