import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Keyword } from 'src/models/keyword';
import { User } from 'src/models/user';
import { KeywordService } from '../keyword.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.css'],
})
export class KeywordsComponent implements OnInit {
  keywords: Keyword[] = [];
  smartKeywords: Keyword[] = [];
  filteredSmartKeywords: Keyword[] = [];
  alertTimes: User['alert_times'] = [];
  alertTimesCollapsed = true;

  newKeyword = '';

  constructor(
    private route: ActivatedRoute,
    private keywordService: KeywordService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.route.parent?.data.subscribe((data) => {
      this.keywords = data.keywords;
      this.smartKeywords = data.smartKeywords;
      this.alertTimes = data.alertTimes;
      this.filterSmartKeywords();
    });
    this.keywordService.getSmartKeywords().subscribe();
  }

  filterSmartKeywords(): void {
    this.filteredSmartKeywords = this.smartKeywords.filter(
      (sk) => this.keywords.findIndex((k) => k.keyword === sk.keyword) === -1
    );
  }

  addKeyword(keyword: string): void {
    if (keyword.trim() === '') {
      return;
    }
    this.keywordService.putKeyword(keyword).subscribe((res) => {
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
      this.newKeyword = '';
      this.filterSmartKeywords();
    });
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
      this.filterSmartKeywords();
    });
  }

  showDeleteModal(id: number): void {
    const keyword = this.keywords.find((k) => k.id === id)?.keyword;
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

  showAddSmartKeywordModal(id: number): void {
    const keyword = this.filteredSmartKeywords.find((k) => k.id === id)
      ?.keyword;
    if (keyword) {
      this.modalService.showModal(
        '스마트 키워드 구독',
        [
          {
            text: '구독',
            context: 'primary',
            handler: () => {
              this.addKeyword(keyword);
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
        `스마트 키워드 \'${keyword}\'를 구독 하시겠습니까?`
      );
    }
  }
}
