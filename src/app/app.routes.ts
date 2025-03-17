import { Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { AreasComponent } from './components/areas/areas.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: EmployeesComponent },
    { path: 'areas', component: AreasComponent },
];
