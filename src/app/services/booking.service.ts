import { Injectable } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BookingService {

    constructor(private authService: AuthService, private http: HttpClient) {

    }


    public getBudgetLeft(): Observable<number> {
        if (this.authService.getAuthStatus() === false) {
            return new Observable<number>((observer) => {
                observer.next(0);
                observer.complete();
            });
        }
        return this.http.get('http://localhost:3000/budget', { withCredentials: true }) as Observable<number>;

    }


    public getUserBookings(): Observable<Booking[]> {
        if (this.authService.getAuthStatus() === false) {
            return new Observable<Booking[]>((observer) => {
                observer.next([]);
                observer.complete();
            });
        }
        return this.http.get('http://localhost:3000/bookings', { withCredentials: true }) as Observable<Booking[]>;
    }
}
