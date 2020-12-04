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
export class AlertTimesResolver implements Resolve<User['alert_times']> {
  constructor(private userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User['alert_times']> {
    return this.userService.getAlertTimes();
  }
}
