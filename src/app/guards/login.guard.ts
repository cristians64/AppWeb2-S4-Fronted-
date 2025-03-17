import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem("login")=="false"){
    return true;
  }else{
    return false;
  }

  return true;
};
