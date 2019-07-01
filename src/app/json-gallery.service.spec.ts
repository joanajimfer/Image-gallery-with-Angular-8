import { TestBed } from '@angular/core/testing';

import { JsonGalleryService } from './json-gallery.service';

describe('JsonGalleryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonGalleryService = TestBed.get(JsonGalleryService);
    expect(service).toBeTruthy();
  });
});
