import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./Pages/Auth/login/login').then(m => m.Login)
  },
  
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./Pages/DashBoard/dash-board/dash-board').then(m => m.DashBoard)
  },
  {
    path: '**', 
    loadComponent: () =>
      import('./Layout/notfound/notfound').then(m => m.Notfound)
  }
];
