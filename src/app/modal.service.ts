import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalComponent } from './modal/modal.component';

export interface Modal {
  title: string;
  body?: string;
  buttons: { text: string; context: string; handler: () => void }[];
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private ngbModal: NgbModal) {}

  showModal(
    title: Modal['title'],
    buttons: Modal['buttons'],
    body?: Modal['body']
  ): void {
    const modalRef = this.ngbModal.open(ModalComponent, { centered: true });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.body = body;
    modalRef.componentInstance.buttons = buttons;
  }

  closeModal(): void {
    this.ngbModal.dismissAll();
  }
}
