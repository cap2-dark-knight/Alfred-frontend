import { Component, HostBinding, OnInit, Input } from '@angular/core';

import { News } from 'src/models/news';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent implements OnInit {
  @Input() news: News[] = [];

  @HostBinding('class.list-group') listGroup = true;

  constructor() {}

  ngOnInit(): void {}

  openURL(url: string): void {
    if (url.trim() !== '') {
      window.open(url, '__blank');
    }
  }
}
