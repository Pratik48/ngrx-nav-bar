import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | boolean;
}

@Injectable({
    providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate,
                  _currentRoute: ActivatedRouteSnapshot,
                  _currentState: RouterStateSnapshot,
                  _nextState?: RouterStateSnapshot): Observable<boolean> | boolean {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
