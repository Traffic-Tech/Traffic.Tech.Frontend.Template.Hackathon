import { Routes } from '@angular/router';
import { Page1 } from './shared/pages/page1/page1';
import { Page2 } from './shared/pages/page2/page2';
import { Layout } from './shared/pages/layout/layout';

export const routes: Routes = [
  { path: 'page1', component: Page1 },
  { path: 'page2', component: Page2 },
  { path: 'layout', component: Layout },
  { path: '**', redirectTo: 'layout' }
];
