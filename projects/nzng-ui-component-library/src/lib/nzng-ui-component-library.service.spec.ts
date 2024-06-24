import { TestBed } from '@angular/core/testing';

import { NzngUiComponentLibraryService } from './nzng-ui-component-library.service';

describe('NzngUiComponentLibraryService', () => {
  let service: NzngUiComponentLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NzngUiComponentLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
