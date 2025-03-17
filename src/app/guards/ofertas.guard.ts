import { CanActivateFn, CanMatchFn } from '@angular/router';

export const ofertasGuard: CanActivateFn = (route, state) => {
  let acceso="true";
  

  if(localStorage.getItem("login") == "true"){
    return true;
  }else{
    return false;
  }
};

export const proveedoresGuard: CanMatchFn = (route, state) => {
  
  let acceso=true

  if(sessionStorage.getItem("producto")=="true"){
    acceso =false
  }

  return acceso;
};
