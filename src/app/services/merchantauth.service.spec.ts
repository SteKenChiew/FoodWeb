import { TestBed } from '@angular/core/testing';

import { MerchantauthService } from './merchantauth.service';

describe('MerchantauthService', () => {
  let service: MerchantauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerchantauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
