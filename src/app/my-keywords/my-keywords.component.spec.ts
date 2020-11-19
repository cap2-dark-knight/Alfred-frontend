import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyKeywordsComponent } from './my-keywords.component';

describe('MyKeywordsComponent', () => {
  let component: MyKeywordsComponent;
  let fixture: ComponentFixture<MyKeywordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyKeywordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyKeywordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
