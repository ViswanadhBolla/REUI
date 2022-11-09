/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserProfileResolverService } from './user-profile-resolver.service';

describe('Service: UserProfileResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserProfileResolverService]
    });
  });

  it('should ...', inject([UserProfileResolverService], (service: UserProfileResolverService) => {
    expect(service).toBeTruthy();
  }));
});
