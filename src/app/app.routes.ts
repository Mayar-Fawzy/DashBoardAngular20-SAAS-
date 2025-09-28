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
     children: [
      {
         path: 'dashboardcomp',
        loadComponent: () =>
          import('./Pages/DashBoard/dash-board/dash-board').then(m => m.DashBoard)
      }
      ,
      {
        path: 'analytics',
        loadComponent: () =>
          import('./Pages/DashBoard/analytics/analytics').then(m => m.Analytics)
      },
      {
    path: 'invoice',
        loadComponent: () =>
          import('./Pages/DashBoard/invoice/invoice').then(m => m.Invoice)
      },{
         path: 'schedule',
        loadComponent: () =>
          import('./Pages/DashBoard/schedule/schedule').then(m => m.Schedule)
      },{
        path: 'calendar',
        loadComponent: () =>
          import('./Pages/DashBoard/calendar/calendar').then(m => m.Calendar)
      },
      {
        path: 'messages',
        loadComponent: () =>
          import('./Pages/DashBoard/messages/messages').then(m => m.Messages)
      },{
         path: 'notifications',
        loadComponent: () =>
          import('./Pages/DashBoard/notification/notification').then(m => m.Notification)
      },
      

      
      {
 path: 'settings',
        loadComponent: () =>
          import('./Pages/DashBoard/settings/settings').then(m => m.Settings)
      },
      {
        path: '',
        redirectTo: 'dashboardcomp',
        pathMatch: 'full' // Default child route
      }
    ]
  }
  ,
  {
    path: '**',
    loadComponent: () =>
      import('./Layout/notfound/notfound').then(m => m.Notfound)
  }
];