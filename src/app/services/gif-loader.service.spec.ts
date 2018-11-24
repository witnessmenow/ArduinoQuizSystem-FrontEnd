import { TestBed } from '@angular/core/testing';

import { GifLoaderService } from './gif-loader.service';

describe('GifLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GifLoaderService = TestBed.get(GifLoaderService);
    expect(service).toBeTruthy();
  });
});
