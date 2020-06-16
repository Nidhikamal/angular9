import { AboutComponent } from '../about/about.component';
import { UserComponent } from '../user/user.component';
import { TaskComponent } from '../task/task.component';

export const childRoutes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { icon: 'dashboard', text: 'Dashboard' }
  }, {
    path: 'user',
    data: { icon: '', text: 'User' },
    loadChildren: () => import('../user/user.module').then(m => m.UserModule),

  },
  {
    path: 'about',
    loadChildren: () => import('../about/about.module').then(m => m.AboutModule),
    data: { icon: '', text: 'About' }
  },
  {
    path: 'leaflet',
    loadChildren: () => import('../leaflet/leaflet.module').then(m => m.LeafletModule),
    data: { icon: '', text: 'Leafletmap' }
  }];
