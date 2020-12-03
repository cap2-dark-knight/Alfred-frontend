import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    lastName: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'submit',
    }),
    firstName: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'submit',
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'submit',
    }),
    password: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'submit',
    }),
    passwordVerif: new FormControl('', {
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

  onJoin(): void {
    if (!this.registerForm.valid) {
      return;
    }

    const lastName: string = this.registerForm.get('lastName')?.value;
    const firstName: string = this.registerForm.get('firstName')?.value;
    const email: string = this.registerForm.get('email')?.value;
    const password: string = this.registerForm.get('password')?.value;
    const passwordVerif: string = this.registerForm.get('passwordVerif')?.value;
    if (password !== passwordVerif) {
      return;
    }
    this.authService
      .postSignup(email, firstName, lastName, password)
      .subscribe((res) => {
        if (res) {
          this.router.navigate(['/app']);
        } else {
          this.modalService.showModal('회원가입 실패', [
            {
              text: '취소',
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
