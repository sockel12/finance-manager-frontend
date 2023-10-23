import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BookingService } from 'src/app/services/booking.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    budgetLeft: number;
    bookings: Booking[];

    constructor(private authService: AuthService, private bookingService: BookingService) {
        this.budgetLeft = 0;
        this.bookings = [];


    }

    ngOnInit(): void {
        this.bookingService.getBudgetLeft().subscribe(budget => {
            this.budgetLeft = budget;
        });
        this.bookingService.getUserBookings().subscribe(bookings => {
            this.bookings = bookings;
        });
    }



    getUser(): User {
        return this.authService.getUser() ?? { username: '', budget: 0, name: '' };
    }






}
