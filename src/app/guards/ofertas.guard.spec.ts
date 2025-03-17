import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { ofertasGuard } from './ofertas.guard';

describe('ofertasGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => ofertasGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
