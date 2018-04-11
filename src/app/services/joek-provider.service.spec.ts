// import { TestBed, inject } from '@angular/core/testing';

// import { JoekProviderService } from './joek-provider.service';

// describe('JoekProviderService', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [JoekProviderService]
//     });
//   });

//   it('should be created', inject([JoekProviderService], (service: JoekProviderService) => {
//     expect(service).toBeTruthy();
//   }));
// });
import { TestBed, inject } from '@angular/core/testing';

import { JoekProviderService } from './joek-provider.service';

describe('JoekProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JoekProviderService]
    });
  });

  it('should be created', inject([JoekProviderService], (service: JoekProviderService) => {
    expect(service).toBeTruthy();
  }));
});
