import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';

export const childRoutes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { icon: 'dashboard', text: 'Dashboard' }
  }, {
    path: 'user',
    // component: UserComponent,
    data: { icon: '', text: 'User' },
    // children: [{
    //   path: 'addtask',
    //   component: TaskComponent
    // },
    // {
    //   path: 'edittask', redirectTo: 'addtask'
    // }]
  
     loadChildren:()=>import('./user/user.module').then(m=>m.UserModule),
    
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
    data: { icon: '', text: 'About' }
  },
  {
    path: 'leaflet',
    loadChildren: () => import('./leaflet/leaflet.module').then(m => m.LeafletModule),
    data: { icon: '', text: 'Leafletmap' }
  }
  //     {
  //       path: 'charts',
  //       loadChildren: () =>
  //         import('./charts/charts.module').then(m => m.ChartsModule),
  //       data: { icon: 'bar_chart', text: 'Charts' }
  //     },
  //     {
  //       path: 'tables',
  //       loadChildren: () =>
  //         import('./tables/tables.module').then(m => m.TablesModule),
  //       data: { icon: 'table_chart', text: 'Tables' }
  //     },
  //     {
  //       path: 'forms',
  //       loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule),
  //       data: { icon: 'assignment', text: 'Forms' }
  //     },
  //     {
  //       path: 'mat-grid',
  //       loadChildren: () =>
  //         import('./mat-grid/mat-grid.module').then(m => m.MatGridModule),
  //       data: { icon: 'grid_on', text: 'Flex Grid' }
  //     },
  //     {
  //       path: 'mat-components',
  //       loadChildren: () =>
  //         import('./mat-components/mat-components.module').then(
  //           m => m.MatComponentsModule
  //         ),
  //       data: { icon: 'code', text: 'Material Components' }
  //     },
  //     {
  //       path: 'animations',
  //       loadChildren: () =>
  //         import('./animations/animations.module').then(m => m.AnimationsModule),
  //       data: { icon: 'perm_media', text: 'Animations' }
  //     },
  //     {
  //       path: 'google-maps',
  //       loadChildren: () =>
  //         import('./google-map-demo/google-map-demo.module').then(
  //           m => m.GoogleMapDemoModule
  //         ),
  //       data: { icon: 'place', text: 'Google Maps' }
  //     }
];