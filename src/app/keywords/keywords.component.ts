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
  keywords: Keyword[] = [];

  newKeyword = '';

  constructor(
    private keywordService: KeywordService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.keywordService
      .getMyKeywords()
      .subscribe((res) => (this.keywords = res));
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
              text: 'Close',
              context: 'secondary',
              handler: () => {
                this.modalService.closeModal();
              },
            },
          ],
          'Keyword is already added.'
        );
      }
      this.keywords = res.keywords;
    });
    this.newKeyword = '';
  }

  removeKeyword(keyword: string): void {
    if (keyword.trim() === '') {
      return;
    }
    this.keywordService.deleteKeyword(keyword).subscribe((res) => {
      if (!res.success) {
        this.modalService.showModal(
          'Failed to delete keyword',
          [
            {
              text: 'Close',
              context: 'secondary',
              handler: () => {
                this.modalService.closeModal();
              },
            },
          ],
          'Keyword does not exist.'
        );
      }
      this.keywords = res.keywords;
    });
  }

  showDeleteModal(id: number): void {
    const keyword = this.keywords.find((k) => k.id === id)?.value;
    if (keyword) {
      this.modalService.showModal(
        'Remove keyword',
        [
          {
            text: 'Remove',
            context: 'danger',
            handler: () => {
              this.removeKeyword(keyword);
              this.modalService.closeModal();
            },
          },
          {
            text: 'Cancel',
            context: 'secondary',
            handler: () => {
              this.modalService.closeModal();
            },
          },
        ],
        `Would you like to remove the keyword \'${keyword}\' from your subscription?`
      );
    }
  }
}
