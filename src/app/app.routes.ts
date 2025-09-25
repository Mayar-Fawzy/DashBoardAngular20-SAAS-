import { Routes } from '@angular/router';
import { authGuard } from './Pages/Auth/Core/Guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./Pages/Auth/login/login').then(m => m.LoginComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./Pages/DashBoard/dash-board/dash-board').then(m => m.DashBoard),
    // canActivate: [authGuard]
  },
  {
    path: '**',
    loadComponent: () =>
      import('./Layout/notfound/notfound').then(m => m.Notfound)
  }
];