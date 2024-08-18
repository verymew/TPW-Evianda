import { Routes } from '@angular/router';
import { AuthpageComponent } from './pages/authpage/authpage.component';
import { ProfilepageComponent } from './pages/profilepage/profilepage.component';
import { authGuard } from './components/require-auth/require-auth.component';
import { HomeComponent } from './pages/home/home.component';
import { ViandaCrudComponent } from './components/vianda-crud/vianda-crud.component';
import { SearchpageComponent } from './pages/searchpage/searchpage.component';

export const routes: Routes = [
  { path: 'login', component: AuthpageComponent },
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfilepageComponent, canActivate: [authGuard] },
  { path: 'teste', component: ViandaCrudComponent },
  { path: 'search/:city', component: SearchpageComponent }
];
