import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
// import { AuthGuard } from './shared/guards';
import { AuthGuard } from 'shared';
export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  canActivate: [AuthGuard],
  children: [{
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule'
  }, {
    path: 'icons',
    loadChildren: './icons/icons.module#IconsModule'
  }, {
    path: 'cards',
    loadChildren: './cards/cards.module#CardsModule'
  }, {
    path: 'forms',
    loadChildren: './form/form.module#FormModule'
  }, {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule'
  }, {
    path: 'taskboard',
    loadChildren: './taskboard/taskboard.module#TaskboardModule'
  }, {
    path: 'calendar',
    loadChildren: './fullcalendar/fullcalendar.module#FullcalendarModule'
  }, {
    path: 'media',
    loadChildren: './media/media.module#MediaModule'
  }, {
    path: 'widgets',
    loadChildren: './widgets/widgets.module#WidgetsModule'
  }, {
    path: 'social',
    loadChildren: './social/social.module#SocialModule'
  }, {
    path: 'docs',
    loadChildren: './docs/docs.module#DocsModule'
  }]
}, {
  path: '',
  component: AuthLayoutComponent,
  loadChildren: './authentication/authentication.module#AuthenticationModule'
}, {
  path: 'error',
  loadChildren: './error/error.module#ErrorModule'
}];

