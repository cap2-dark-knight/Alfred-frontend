import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { AlertTimesFormComponent } from './alert-times-form.component';

describe('AlertTimesFormComponent', () => {
  let component: AlertTimesFormComponent;
  let fixture: ComponentFixture<AlertTimesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertTimesFormComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertTimesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
