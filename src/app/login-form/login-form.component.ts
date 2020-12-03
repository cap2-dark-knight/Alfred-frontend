import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'submit',
    }),
    password: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'submit',
    }),
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {}

  onLogin(): void {
    if (!this.loginForm.valid) {
      return;
    }
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    this.authService.postLogin(email, password).subscribe((res) => {
      if (res) {
        this.router.navigate(['/app']);
      } else {
        this.modalService.showModal('로그인 실패', [
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
