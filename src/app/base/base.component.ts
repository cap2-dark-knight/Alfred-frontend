import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
})
export class BaseComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {}

  onLogout(): void {
    this.modalService.showModal(
      '로그아웃',
      [
        {
          text: '예',
          context: 'primary',
          handler: () => {
            this.logout();
            this.modalService.closeModal();
          },
        },
        {
          text: '아니오',
          context: 'secondary',
          handler: () => {
            this.modalService.closeModal();
          },
        },
      ],
      'Alfred로부터 로그아웃 하시겠습니까?'
    );
  }

  logout(): void {
    this.authService.getLogout().subscribe((res) => {
      if (res) {
        this.router.navigate(['/login']);
      } else {
        this.modalService.showModal('로그아웃 실패', [
          {
            text: '닫기',
            context: 'secondary',
            handler: () => {
              this.modalService.closeModal();
            },
          },
        ]);
      }
    });
  }
}
