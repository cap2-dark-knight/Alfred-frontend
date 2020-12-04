import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { User } from 'src/models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<User | undefined> {
  constructor(private userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User | undefined> {
    return this.userService.getUser();
  }
}
