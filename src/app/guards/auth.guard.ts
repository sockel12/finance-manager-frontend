import { CanActivateFn, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { inject } from '@angular/core';

const needAuth: string[] = [
    'profile',
    'bookings'
];

const noAuthRequired: string[] = [
    'signup'
];



export const needAuthGuard: CanActivateFn = (route) => {
    const routeFound = route.url.filter(segment => needAuth.includes(segment.path)).length > 0;

    if (routeFound) {
        return inject(AuthService).getAuthStatus();
    }

    return true;
};

export const noAuthGuard: CanActivateFn = (route) => {
    const routeFound = route.url.filter(segment => noAuthRequired.includes(segment.path)).length > 0;

    if (routeFound) {
        return !inject(AuthService).getAuthStatus();
    }

    return true;
};