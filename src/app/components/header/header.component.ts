import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    formData: LoginFormData;


    constructor(private authService: AuthService) {
        this.formData = {
            username: '',
            password: ''
        };
    }

    ngOnInit(): void {

    }

    public getUser(): User | null {
        return this.authService.getUser();
    }


    public isLoggedIn(): boolean {
        return this.authService.getAuthStatus();
    }

    async login(): Promise<void> {
        if (this.inputValid()) {

            this.authService.login(this.formData.username, this.formData.password).subscribe((res) => {
                if (res) {
                    alert('Login succeeded');
                } else {
                    alert('Login failed');
                }
            });
        }
    }

    async logout() {
        this.authService.logout().subscribe((res) => {
            if (res) {
                alert('Logout succeeded');
            } else {
                alert('Logout failed');
            }
        });
    }

    private notNullOrEmpty(str: string): boolean {
        return str !== null && str !== undefined && str != '';
    }

    inputValid(): boolean {
        return this.notNullOrEmpty(this.formData.username) && this.notNullOrEmpty(this.formData.password);
    }


}
