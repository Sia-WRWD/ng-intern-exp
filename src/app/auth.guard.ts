import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './services/auth.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService, private router: Router) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._authService.isAuthenticated().pipe(map((response: { authenticated: boolean}) => {
        if (response.authenticated) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }), catchError((error) => {
        this.router.navigate(['/login']);
        return of(false);
    }));
}
  
}
