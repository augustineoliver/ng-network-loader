import { TestBed } from '@angular/core/testing';

import { NetworkLoaderService } from './network-loader.service';

describe('NetworkLoaderService', () => {
  let service: NetworkLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworkLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
