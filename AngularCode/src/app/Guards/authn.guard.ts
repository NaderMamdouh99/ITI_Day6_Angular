import { AccountServicesService } from './../services/account-services.service';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authnGuard: CanActivateFn = (route, state) => {
  var result = inject(AccountServicesService);
  if (!result.isAuthenticated) {
    inject(Router).navigate(['Login'])
  }
  return result.isAuthenticated;
};
