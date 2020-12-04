import { Component, Input, OnInit } from '@angular/core';

import { User } from 'src/models/user';

@Component({
  selector: 'app-alert-times-form',
  templateUrl: './alert-times-form.component.html',
  styleUrls: ['./alert-times-form.component.css'],
})
export class AlertTimesFormComponent implements OnInit {
  @Input() alertTimes: User['alart_times'] = [];

  constructor() {}

  ngOnInit(): void {}
}
