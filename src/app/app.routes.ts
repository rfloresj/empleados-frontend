import { Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { AreasComponent } from './components/areas/areas.component';
import { LoginComponent } from './components/login/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: EmployeesComponent, canActivate: [authGuard] },
  { path: 'areas', component: AreasComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
];
