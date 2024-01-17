import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'admin-log-in',
    loadChildren: () => import('./admin-log-in/admin-log-in.module').then( m => m.AdminLogInPageModule)
  },
  {
    path: 'admin-home',
    loadChildren: () => import('./admin-home/admin-home.module').then( m => m.AdminHomePageModule)
  },
  {
    path: 'user-home',
    loadChildren: () => import('./user-home/user-home.module').then( m => m.UserHomePageModule)
  },
  {
    path: 'user-log-in',
    loadChildren: () => import('./user-log-in/user-log-in.module').then( m => m.UserLogInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'my-clients',
    loadChildren: () => import('./my-clients/my-clients.module').then( m => m.MyClientsPageModule)
  },
  {
    path: 'admin-module',
    loadChildren: () => import('./admin-module/admin-module.module').then( m => m.AdminModulePageModule)
  },
  {
    path: 'user-module',
    loadChildren: () => import('./user-module/user-module.module').then( m => m.UserModulePageModule)
  },
  {
    path: 'my-appointments',
    loadChildren: () => import('./my-appointments/my-appointments.module').then( m => m.MyAppointmentsPageModule)
  },
  {
    path: 'remove-slot',
    loadChildren: () => import('./remove-slot/remove-slot.module').then( m => m.RemoveSlotPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
