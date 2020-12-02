import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Keyword } from 'src/models/keyword';

@Component({
  selector: 'app-keyword-list',
  templateUrl: './keyword-list.component.html',
  styleUrls: ['./keyword-list.component.css'],
})
export class KeywordListComponent implements OnInit {
  @Input() keywords: Keyword[] = [];
  @Input() bgClass: 'bg-info' | 'bg-warning' | 'bg-secondary' = 'bg-info';

  @Output() keywordClick: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onClick(id: number): void {
    this.keywordClick.emit(id);
  }
}
