import { TestBed } from '@angular/core/testing';

import { TabsDataService } from './tabs-data.service';

describe('TabsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabsDataService = TestBed.get(TabsDataService);
    expect(service).toBeTruthy();
  });
});
