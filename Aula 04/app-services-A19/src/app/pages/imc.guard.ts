import { CanActivateFn } from '@angular/router';

export const imcGuard: CanActivateFn = (route, state) => {
  return true;
};
