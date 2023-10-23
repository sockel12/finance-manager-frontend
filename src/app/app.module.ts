import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from './services/auth/auth.service';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { BookingsComponent } from './components/bookings/bookings.component';
import { CcurrencyPipe } from './ccurrency.pipe';
import { CurrencyPipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', redirectTo: '/' },
    { path: 'profile', component: ProfileComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'bookings', component: BookingsComponent },

];

@NgModule({
    declarations: [
        AppComponent,
        ProfileComponent,
        HeaderComponent,
        FooterComponent,
        SignupComponent,
        HomeComponent,
        BookingsComponent,
        CcurrencyPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(
            appRoutes,
            //{ enableTracing: true } // <-- debugging purposes only
        ),
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
    providers: [
        AuthService,
        CookieService,
        CurrencyPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
