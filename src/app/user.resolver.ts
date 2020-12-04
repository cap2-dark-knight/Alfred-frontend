import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { User } from 'src/models/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<User | undefined> {
  constructor(private authService: AuthService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User | undefined> {
    return this.authService.getUser();
  }
}
