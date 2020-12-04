import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AlertTimesResolver } from './alert-times.resolver';

describe('AlertTimesResolver', () => {
  let resolver: AlertTimesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    resolver = TestBed.inject(AlertTimesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
