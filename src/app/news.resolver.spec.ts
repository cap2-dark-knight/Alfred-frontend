import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { NewsResolver } from './news.resolver';

describe('NewsResolver', () => {
  let resolver: NewsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    resolver = TestBed.inject(NewsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
