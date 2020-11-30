import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'submit',
    }),
    username: new FormControl('', {
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

    const name = this.registerForm.get('name')?.value;
    const username = this.registerForm.get('username')?.value;
    const password = this.registerForm.get('password')?.value;
    const passwordVerif = this.registerForm.get('passwordVerif')?.value;
    if (password !== passwordVerif) {
      return;
    }
    this.authService.postSignup(username, password).subscribe((res) => {
      if (res) {
        this.router.navigate(['/app']);
      } else {
        this.modalService.showModal('Registeration failed', [
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
