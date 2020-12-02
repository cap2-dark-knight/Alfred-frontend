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
      'Log out',
      [
        {
          text: 'Yes',
          context: 'primary',
          handler: () => {
            this.logout();
            this.modalService.closeModal();
          },
        },
        {
          text: 'No',
          context: 'secondary',
          handler: () => {
            this.modalService.closeModal();
          },
        },
      ],
      'Would you like to log out from Alfred?'
    );
  }

  logout(): void {
    this.authService.getLogout().subscribe((res) => {
      if (res) {
        this.router.navigate(['/login']);
      } else {
        this.modalService.showModal('Logout failed', [
          {
            text: 'Close',
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
