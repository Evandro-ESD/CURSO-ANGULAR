import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const controleGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService)
  const router = inject(Router)

  if(!auth.isAutenticado()){
    router.navigate(['login'])
    console.log('Passou por aqui!!!')
    return false
  }
  return true;
};
