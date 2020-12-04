import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

import { User } from 'src/models/user';
import { ModalService } from '../modal.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-alert-times-form',
  templateUrl: './alert-times-form.component.html',
  styleUrls: ['./alert-times-form.component.css'],
})
export class AlertTimesFormComponent implements OnInit {
  @Input() set alertTimes(times: User['alert_times']) {
    const values: boolean[] = Array(24);
    values.fill(false);
    times.forEach((t) => (values[t] = true));

    this.timesArray.clear();
    values.forEach((v) => this.timesArray.push(this.builder.control(v)));
  }
  timesForm = this.builder.group(
    {
      times: this.builder.array([]),
    },
    { updateOn: 'submit' }
  );

  get timesArray(): FormArray {
    return this.timesForm.get('times') as FormArray;
  }

  constructor(
    private builder: FormBuilder,
    private userService: UserService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {}

  onSave(): void {
    const newAlertTimes: User['alert_times'] = [];
    (this.timesArray.value as Array<boolean>).forEach((t, i) => {
      if (t) {
        newAlertTimes.push(i);
      }
    });

    this.userService.postAlertTimes(newAlertTimes).subscribe((res) => {
      if (res.result && Array.isArray(res.alertTimes)) {
        this.alertTimes = res.alertTimes;
      } else {
        this.modalService.showModal(
          '구독 알림 시간 저장 실패',
          [
            {
              text: '닫기',
              context: 'secondary',
              handler: () => {
                this.modalService.closeModal();
              },
            },
          ],
          '다시 시도하세요'
        );
      }
    });
  }
}
