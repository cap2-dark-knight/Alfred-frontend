import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginBaseComponent } from './login-base.component';

describe('LoginBaseComponent', () => {
  let component: LoginBaseComponent;
  let fixture: ComponentFixture<LoginBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginBaseComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
