import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SmartKeywordsResolver } from './smart-keywords.resolver';

describe('SmartKeywordsResolver', () => {
  let resolver: SmartKeywordsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    resolver = TestBed.inject(SmartKeywordsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
