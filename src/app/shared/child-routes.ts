
//import { FlexSheetComponent } from '../components/flex-sheet/flex-sheet.component';

export const childRoutes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { icon: 'dashboard', text: 'Dashboard' }
  }, {
    path: 'user',
    data: { icon: '', text: 'User' },
    loadChildren: () => import('../components').then(m => m.UserModule),

  },
  {
    path: 'about',
    loadChildren: () => import('../components').then(m => m.AboutModule),
    data: { icon: '', text: 'About' }
  },
  {
    path: 'leaflet',
    loadChildren: () => import('../components').then(m => m.LeafletModule),
    data: { icon: '', text: 'Leafletmap' }
  },
  {
    path: 'flexsheet',
    //component:FlexSheetComponent,
    loadChildren: () => import('../components').then(m => 	m.FlexSheetModule),
    data: { icon: '', text: 'FlexSheet' }
  },
  {
    path: 'flexgrid',
    //component:FlexSheetComponent,
    loadChildren: () => import('../components/').then(m => 	m.FlexGridModule),
    data: { icon: '', text: 'FlexGrid' }
  },
  {
    path: 'matdatatable',
    //component:MatDatatable,
    loadChildren: () => import('../components').then(m => 	m.DatatablematModule),
    data: { icon: '', text: 'MatDatatable' }
  },
  {
    path: 'formcontrols',
    //component:MatDatatable,
    loadChildren: () => import('../components').then(m => 	m.FormControlsModule),
    data: { icon: '', text: 'MatFormcontrols' }
  }

];
