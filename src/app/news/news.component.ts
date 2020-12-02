import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { News } from 'src/models/news';
import { Keyword } from 'src/models/keyword';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  keywords: Keyword[] = [];
  smartKeywords: Keyword[] = [];
  news: News[] = [];
  selectedKeyword: Keyword | undefined;
  selectedNews: News[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.parent?.data.subscribe((data) => {
      this.keywords = data.keywords;
      this.smartKeywords = data.smartKeywords;
      this.news = data.news;
      this.selectedNews = data.news;
    });
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
