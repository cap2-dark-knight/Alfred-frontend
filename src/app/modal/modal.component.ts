import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Modal } from '../modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() title: Modal['title'] = '';
  @Input() body: Modal['body'] = '';
  @Input() buttons: Modal['buttons'] = [];

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
