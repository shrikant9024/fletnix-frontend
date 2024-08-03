import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
// import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {
        path:'home',title:'Home', loadComponent:()=>import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path:'signup',title:'signup', component:SignupComponent
    },
    {
        path:'login',title:'login', component:LoginComponent
    },
    {
        path:'movies/:id',title:'login', loadComponent:()=>import('./pages/movie-details/movie-details.component').then(m => m.MovieDetailsComponent)
    },
    // { path: '**', redirectTo: 'home' }

];
