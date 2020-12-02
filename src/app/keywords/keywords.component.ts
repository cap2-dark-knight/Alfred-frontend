import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute,
    private keywordService: KeywordService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.route.parent?.data.subscribe((data) => {
      this.keywords = data.keywords;
    });
  }

  addKeyword(): void {
    if (this.newKeyword.trim() === '') {
      return;
    }
    this.keywordService.putKeyword(this.newKeyword).subscribe((res) => {
      if (!res.success) {
        this.modalService.showModal(
          '키워드 구독 실패',
          [
            {
              text: '닫기',
              context: 'secondary',
              handler: () => {
                this.modalService.closeModal();
              },
            },
          ],
          '이미 구독한 키워드입니다.'
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
          '키워드 구독 헤제 실패',
          [
            {
              text: '닫기',
              context: 'secondary',
              handler: () => {
                this.modalService.closeModal();
              },
            },
          ],
          '구독 중이지 않는 키워드입니다.'
        );
      }
      this.keywords = res.keywords;
    });
  }

  showDeleteModal(id: number): void {
    const keyword = this.keywords.find((k) => k.id === id)?.value;
    if (keyword) {
      this.modalService.showModal(
        '키워드 구독 해제',
        [
          {
            text: '구독 해제',
            context: 'danger',
            handler: () => {
              this.removeKeyword(keyword);
              this.modalService.closeModal();
            },
          },
          {
            text: '취소',
            context: 'secondary',
            handler: () => {
              this.modalService.closeModal();
            },
          },
        ],
        `키워드 \'${keyword}\'에 대한 구독을 해제 하시겠습니까?`
      );
    }
  }
}
