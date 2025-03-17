import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


Injectable({
  providedIn: 'root'
})
/*
export const authGuard: CanActivateFn = (route, state) => {
  /*
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
};*/
