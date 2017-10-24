import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { ErrorLayoutComponent } from './layouts/error/error-layout.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from 'shared';

const ClientAppChildern = [
  {
    path: 'components',
    loadChildren: './app/components/components.module#ComponentsModule'
  },
  {
    path: 'icons',
    loadChildren: './app/icons/icons.module#IconsModule'
  },
  {
    path: 'cards',
    loadChildren: './app/cards/cards.module#CardsModule'
  },
  {
    path: 'forms',
    loadChildren: './app/form/form.module#FormModule'
  },
  {
    path: 'pages',
    loadChildren: './app/pages/pages.module#PagesModule'
  },
  {
    path: 'taskboard',
    loadChildren: './app/taskboard/taskboard.module#TaskboardModule'
  },
  {
    path: 'calendar',
    loadChildren: './app/fullcalendar/fullcalendar.module#FullcalendarModule'
  },
  {
    path: 'media',
    loadChildren: './app/media/media.module#MediaModule'
  },
  {
    path: 'widgets',
    loadChildren: './app/widgets/widgets.module#WidgetsModule'
  },
  { path: 'social', loadChildren: './app/social/social.module#SocialModule' },
  { path: 'docs', loadChildren: './app/docs/docs.module#DocsModule' },
  { path: 'error', loadChildren: './app/error/error.module#AppErrorModule' }
];

export const AppRoutes: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  {
    path: 'app',
    component: AdminLayoutComponent,
    children: ClientAppChildern
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './auth/authentication.module#AuthenticationModule'
      }
    ]
  },
  {
    path: 'error',
    component: ErrorLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './error/error.module#ErrorModule'
      }
    ]
  }
];
