import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedOutGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.userService.getUser().pipe(
      // tap((res) => console.log(res)),
      map((res) => {
        if (res) {
          this.router.navigate(['/app']);
          return false;
        }
        return true;
      })
    );
  }
}
