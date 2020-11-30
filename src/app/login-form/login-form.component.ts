import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', {
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
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    this.authService.postLogin(username, password).subscribe((res) => {
      if (res) {
        this.router.navigate(['/app']);
      } else {
        this.modalService.showModal('Login failed', [
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
