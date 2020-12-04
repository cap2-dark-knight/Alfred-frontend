import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertTimesFormComponent } from './alert-times-form.component';

describe('AlertTimesFormComponent', () => {
  let component: AlertTimesFormComponent;
  let fixture: ComponentFixture<AlertTimesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertTimesFormComponent],
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
