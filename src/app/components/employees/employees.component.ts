import { Component, OnInit } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { AppMenuComponent } from '../app-menu/app-menu.component';
import { EmployeeService, Employee } from '../../services/employee.service';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

@Component({
  selector: 'app-employees',
  imports: [EmployeeComponent, NewEmployeeComponent, AppMenuComponent],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  isEditingEmployee = false;
  isAddingEmployee = false;
  selectedEmployee: Employee | null = null;

  constructor(
    private employeeService: EmployeeService,
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (data) => (this.employees = data),
      error: (err) => console.log('Error loading employees', err),
    });
  }

  onStartEditEmployee(id: number): void {
    this.selectedEmployee = this.employees.find((e) => e.id === id) || null;
    this.isEditingEmployee = !!this.selectedEmployee;
  }

  onCloseEditEmployee(): void {
    this.isEditingEmployee = false;
    this.loadEmployees();
  }

  onStartAddEmployee(): void {
    this.isAddingEmployee = true;
  }

  onCloseAddEmployee(): void {
    this.isAddingEmployee = false;
    this.loadEmployees();
  }

  onDeleteEmployee(id: number) {
    const employeeName =
      this.employees.find((e) => e.id === id)?.name ?? 'desconocido';

    if (
      confirm(`¿Estás seguro que deseas eliminar el empleado ${employeeName}?`)
    ) {
      this.employeeService.deleteEmployee(id).subscribe({
        next: () => {
          Toastify({
            text: `Empleado "${employeeName}" eliminado correctamente.`,
            duration: 3000,
            gravity: 'bottom',
            position: 'right',
            backgroundColor: '#0D6EFD',
          }).showToast();
          this.loadEmployees();
        },
        error: (error) => {
          console.log('Error al eliminar el empleado', error);
          const message = error.error?.message
            ? error.error.message
            : `No se puede eliminar el empleado "${employeeName}".`;
          alert(message);
        },
      });
    }
  }
}
