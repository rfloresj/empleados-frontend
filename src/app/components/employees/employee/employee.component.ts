import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee, EmployeeService } from '../../../services/employee.service';
import { Area, AreaService } from '../../../services/area.service';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  @Input() employeeToEdit: Employee | null = null;
  @Output() close = new EventEmitter<void>();
  enteredName = '';
  enteredEmail = '';
  enteredPhone = '';
  enteredArea: number | null = null;
  areas: Area[] = [];

  constructor(
    private employeeService: EmployeeService,
    private areaService: AreaService
  ) {}

  ngOnInit(): void {
    this.areaService.getAreas().subscribe({
      next: (data) => (this.areas = data),
      error: (err) => console.log('Error loading areas', err),
    });
    if (this.employeeToEdit) {
      this.enteredName = this.employeeToEdit.name;
      this.enteredEmail = this.employeeToEdit.email;
      this.enteredPhone = this.employeeToEdit.phone;
      this.enteredArea = this.employeeToEdit.areaId;
    }
  }

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    if (
      !this.enteredName.trim() ||
      !this.enteredEmail.trim() ||
      !this.enteredPhone.trim() ||
      !this.enteredArea
    ) {
      console.log('Todos los campos son obligatorios');
      return;
    }

    if (!this.employeeToEdit) {
      console.log('No hay empleado seleccionado para actualizar.');
      return;
    }

    const updatedEmployee: Partial<Employee> = {
      name: this.enteredName,
      email: this.enteredEmail,
      phone: this.enteredPhone,
      areaId: this.enteredArea,
    };

    this.employeeService
      .updateEmployee(this.employeeToEdit.id, updatedEmployee)
      .subscribe({
        next: () => {
          Toastify({
            text: 'Empleado actualizado correctamente',
            duration: 3000,
            gravity: 'bottom',
            position: 'right',
            backgroundColor: '#78A75A',
          }).showToast();
          this.close.emit();
        },
        error: (error: HttpErrorResponse) => {
          if (error.status === 409) {
            alert('El correo ya existe.');
          } else {
            console.log('Error updating employee', error);
          }
        },
      });
  }
}
