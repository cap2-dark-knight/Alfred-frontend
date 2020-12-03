import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Keyword } from 'src/models/keyword';

@Component({
  selector: 'app-keyword-list',
  templateUrl: './keyword-list.component.html',
  styleUrls: ['./keyword-list.component.css'],
})
export class KeywordListComponent implements OnInit {
  @Input() keywords: Keyword[] = [];
  @Input() smartKeywords: Keyword[] = [];

  @Output() keywordClick: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onClick(id: number): void {
    this.keywordClick.emit(id);
  }

  isSmartKeyword(keyword: Keyword): boolean {
    return (
      this.smartKeywords.findIndex((sm) => sm.keyword === keyword.keyword) !==
      -1
    );
  }
}
