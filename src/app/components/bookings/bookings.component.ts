import { Component } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
    selector: 'app-bookings',
    templateUrl: './bookings.component.html',
    styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {

    bookings: Booking[];

    constructor(private bookingService: BookingService) {
        this.bookings = [];
    }

    ngOnInit(): void {
        this.bookingService.getUserBookings().subscribe(bookings => {
            this.bookings = bookings;
        });
    }


}
