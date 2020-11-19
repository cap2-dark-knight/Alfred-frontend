import { Component, OnInit, Input } from '@angular/core';
import { Keyword } from 'src/models/keyword';

@Component({
  selector: 'app-keyword-list',
  templateUrl: './keyword-list.component.html',
  styleUrls: ['./keyword-list.component.css'],
})
export class KeywordListComponent implements OnInit {
  @Input() keywords: Keyword[] = [];
  @Input() bgClass: 'bg-info' | 'bg-warning' | 'bg-secondary' = 'bg-info';

  constructor() {}

  ngOnInit(): void {}
}
