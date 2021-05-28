import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMarqueeModule } from 'ng-marquee';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './common/top-menu/top-menu.component';
import { QueBarComponent } from './common/que-bar/que-bar.component';
import { PlayerBarComponent } from './common/player-bar/player-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SongsComponent } from './pages/songs/songs.component';
import { CatagoriesComponent } from './pages/catagories/catagories.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SplashComponent } from './pages/splash/splash.component';
import { ShowUserComponent } from './pages/signup/show-user/show-user.component';
import { SharedService } from './services/shared.service';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';
import { from } from 'rxjs';
import { AddEditUserComponent } from './pages/signup/add-edit-user/add-edit-user.component';
import { UserComponent } from './pages/user/user.component';
import { RegistrationComponent } from './pages/user/registration/registration.component';
import { LoginComponent } from './pages/user/login/login.component';
import { UserService } from './shared/user.service';
import { AUTH_API_URL, STORE_API_URL } from './app-injection-tokens';
import { JwtModule } from '@auth0/angular-jwt';
import { ACCESS_TOKEN_KEY, AuthService } from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

export function tokenGetter(){
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    QueBarComponent,
    PlayerBarComponent,
    HomeComponent,
    NotFoundPageComponent,
    SongsComponent,
    CatagoriesComponent,
    SigninComponent,
    SignupComponent,
    ShowUserComponent,
    SplashComponent,
    AddEditUserComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgMarqueeModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    environment.production ? [] : AkitaNgDevtools,
    JwtModule.forRoot({
      config:{
        tokenGetter,
        allowedDomains: environment.tokenWhiteListedDomains
      }
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    SharedService,
    UserService,
    AuthService,
    {
      provide: AUTH_API_URL,
      useValue: environment.authApi
    },
    {
      provide: STORE_API_URL,
      useValue: environment.storeApi
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
