import { Routes } from '@angular/router';
import { AuthpageComponent } from './pages/authpage/authpage.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: AuthpageComponent },
  { path: 'login', component: LoginComponent }
];
