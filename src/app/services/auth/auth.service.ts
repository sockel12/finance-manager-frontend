import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private loggedIn: boolean;
    private user: User | null;

    constructor(private http: HttpClient, private cookieService: CookieService) {
        this.loggedIn = false;
        this.user = null;

        console.log('Token: ' + this.cookieService.get('token'));
        if (this.cookieService.get('token') !== '') {
            this.loggedIn = true;

            this.http.get('http://localhost:3000/me', { withCredentials: true })
                .subscribe((res) => {
                    console.log('User: ' + JSON.stringify(res));
                    this.user = res as User;
                });
        }
    }

    private setAuthStatus(status: boolean, user: User | null) {
        this.loggedIn = status;
        this.user = user;
    }

    public getAuthStatus(): boolean {
        return this.loggedIn;
    }

    public getUser(): User | null {
        return this.user;
    }

    public login(username: string, password: string): Observable<boolean> {
        return new Observable<boolean>((observer) => {
            this.http.post('http://localhost:3000/login', {
                username: username,
                password: password
            }, { withCredentials: true }).subscribe(() => {
                this.http.get('http://localhost:3000/me', { withCredentials: true }).subscribe((res) => {
                    this.setAuthStatus(true, res as User);
                    observer.next(true); // Authentication succeeded
                    observer.complete();
                }, (error) => {
                    console.error(error.message);
                    observer.next(false); // Authentication failed
                    observer.complete();
                });
            }, (error) => {
                console.error(error.message);
                observer.next(false); // Authentication failed
                observer.complete();
            });
        });
    }

    public logout(): Observable<boolean> {
        return new Observable<boolean>((observer) => {
            this.http.post('http://localhost:3000/logout', {}, { withCredentials: true }).subscribe(() => {
                this.setAuthStatus(false, null);
                observer.next(true); // Logout succeeded
                observer.complete();
            }, (error) => {
                console.error(error.message);
                observer.next(false); // Logout failed
                observer.complete();
            });
        });
    }





}
