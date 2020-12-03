import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { KeywordsResolver } from './keywords.resolver';

describe('KeywordsResolver', () => {
  let resolver: KeywordsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    resolver = TestBed.inject(KeywordsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
