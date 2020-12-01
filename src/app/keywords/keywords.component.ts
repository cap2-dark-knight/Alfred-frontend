import { Component, OnInit } from '@angular/core';

import { Keyword } from 'src/models/keyword';
import { KeywordService } from '../keyword.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.css'],
})
export class KeywordsComponent implements OnInit {
  myKeywords: Keyword[] = [];

  newKeyword = '';

  constructor(
    private keywordService: KeywordService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.keywordService
      .getMyKeywords()
      .subscribe((res) => (this.myKeywords = res));
  }

  addKeyword(): void {
    if (this.newKeyword.trim() === '') {
      return;
    }
    this.keywordService.putKeyword(this.newKeyword).subscribe((res) => {
      if (!res.success) {
        this.modalService.showModal(
          'Failed to add keyword',
          [
            {
              text: 'close',
              context: 'secondary',
              handler: () => {
                this.modalService.closeModal();
              },
            },
          ],
          'Keyword is already added.'
        );
      }
      this.myKeywords = res.keywords;
    });
    this.newKeyword = '';
  }
}
