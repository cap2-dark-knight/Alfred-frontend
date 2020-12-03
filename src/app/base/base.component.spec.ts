import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { BaseComponent } from './base.component';

describe('BaseComponent', () => {
  let component: BaseComponent;
  let fixture: ComponentFixture<BaseComponent>;
  const faLibrary: FaIconLibrary = new FaIconLibrary();

  beforeEach(async () => {
    faLibrary.addIconPacks(fas);
    await TestBed.configureTestingModule({
      declarations: [BaseComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FontAwesomeModule,
      ],
      providers: [
        {
          provide: FaIconLibrary,
          useValue: faLibrary,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
