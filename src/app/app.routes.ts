// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'onboarding-client',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () =>
      import('./pages/splash/splash-routing.module').then((m) => m.splashRoutes)
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage)
  },
  {
    path: 'selection',
    loadComponent: () => import('./pages/selection/selection.page').then( m => m.SelectionPage)
  },
  {
    path: 'onboarding-client',
    loadComponent: () => import('./pages/onboarding-client/onboarding-client.page').then( m => m.OnboardingClientPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'turn-on-notifications',
    loadComponent: () => import('./pages/turn-on-notifications/turn-on-notifications.page').then( m => m.TurnOnNotificationsPage)
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./pages/forgot-password/forgot-password.page').then( m => m.ForgotPasswordPage)
  },
  {
    path: 'forgot-password-confirmation',
    loadComponent: () => import('./pages/forgot-password-confirmation/forgot-password-confirmation.page').then( m => m.ForgotPasswordConfirmationPage)
  },
  {
    path: 'client-home',
    loadComponent: () => import('./pages/client/client-home/client-home.page').then( m => m.ClientHomePage)
  },
  {
    path: 'client-browse',
    loadComponent: () => import('./pages/client/client-browse/client-browse.page').then( m => m.ClientBrowsePage)
  },
  {
    path: 'client-lawyer-detail',
    loadComponent: () => import('./pages/client/client-lawyer-detail/client-lawyer-detail.page').then( m => m.ClientLawyerDetailPage)
  },
  {
    path: 'client-set-appointment-date',
    loadComponent: () => import('./pages/client/client-set-appointment-date/client-set-appointment-date.page').then( m => m.ClientSetAppointmentDatePage)
  },
  {
    path: 'client-payment-page',
    loadComponent: () => import('./pages/client/client-payment-page/client-payment-page.page').then( m => m.ClientPaymentPagePage)
  },
  {
    path: 'client-payment-success',
    loadComponent: () => import('./pages/client/client-payment-success/client-payment-success.page').then( m => m.ClientPaymentSuccessPage)
  },
  {
    path: 'client-all-appointments',
    loadComponent: () => import('./pages/client/client-all-appointments/client-all-appointments.page').then( m => m.ClientAllAppointmentsPage)
  },
  {
    path: 'client-appointment-detail',
    loadComponent: () => import('./pages/client/client-appointment-detail/client-appointment-detail.page').then( m => m.ClientAppointmentDetailPage)
  },
  {
    path: 'client-appointment-document-upload',
    loadComponent: () => import('./pages/client/client-appointment-document-upload/client-appointment-document-upload.page').then( m => m.ClientAppointmentDocumentUploadPage)
  },
  {
    path: 'client-notifications',
    loadComponent: () => import('./pages/client/client-notifications/client-notifications.page').then( m => m.ClientNotificationsPage)
  },
  {
    path: 'client-profile',
    loadComponent: () => import('./pages/client/client-profile/client-profile.page').then( m => m.ClientProfilePage)
  },
  {
    path: 'client-edit-profile',
    loadComponent: () => import('./pages/client/client-edit-profile/client-edit-profile.page').then( m => m.ClientEditProfilePage)
  },
  {
    path: 'client-change-password',
    loadComponent: () => import('./pages/client/client-change-password/client-change-password.page').then( m => m.ClientChangePasswordPage)
  },
  {
    path: 'onboarding-professional',
    loadComponent: () => import('./pages/onboarding-professional/onboarding-professional.page').then( m => m.OnboardingProfessionalPage)
  }
];
