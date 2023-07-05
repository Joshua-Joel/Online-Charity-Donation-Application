import { TestBed } from '@angular/core/testing';

import { FundraiserloginService } from './fundraiserlogin.service';

describe('FundraiserloginService', () => {
  let service: FundraiserloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FundraiserloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
