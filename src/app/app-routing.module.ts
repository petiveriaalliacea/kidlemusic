import { SongsComponent } from './pages/songs/songs.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatagoriesComponent } from './pages/catagories/catagories.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RegistrationComponent } from'./pages/user/registration/registration.component';
import { LoginComponent } from'./pages/user/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'catagories', component: CatagoriesComponent, canActivate: [AuthGuard]},
  {path: 'songs', component: SongsComponent},
  {path: 'user', component: UserComponent,
  children: [
    { path: 'registration', component: RegistrationComponent },
    { path: 'login', component: LoginComponent }
  ]
  },
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
