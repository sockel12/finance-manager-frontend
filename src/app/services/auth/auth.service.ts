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

        if (this.cookieService.get('token') !== '') {
            this.loggedIn = true;

            this.http.get('http://localhost:3000/me', { withCredentials: true })
                .subscribe((res) => {
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

    public login(username: string, password: string) {
        return this.http.post('http://localhost:3000/login', {
            username: username,
            password: password
        }, { withCredentials: true })
            .pipe((res) => {
                console.log('LOL:' + JSON.stringify(res));
                return res;
            });





        // if (res.status !== 200) {
        //     return false;
        // }

        // const user = await axios.get('http://localhost:3000/me');

        // if (user.status !== 200)
        //     this.setAuthStatus(true, user.data);

    }

    public async logout(): Promise<boolean> {
        try {
            // const res = await axios.get('http://localhost:3000/logout');

            // if (res.status !== 200)
            //     return false;

            // this.setAuthStatus(false, null);
        }
        catch (error: any) {
            console.error(error.message);
            return false;
        }

        return true;
    }





}
