import { Routes } from '@angular/router';

// Pages
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home'}
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About'}
  }
];
