import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService, Employee } from '../../../services/employee.service';
import { AreaService, Area } from '../../../services/area.service';
import { HttpErrorResponse } from '@angular/common/http';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

@Component({
  selector: 'app-new-employee',
  imports: [FormsModule],
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.css',
})
export class NewEmployeeComponent {
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
      alert('Todos los campos son requeridos');
      return;
    }

    const newEmployee: Partial<Employee> = {
      name: this.enteredName,
      email: this.enteredEmail,
      phone: this.enteredPhone,
      areaId: this.enteredArea,
    };

    this.employeeService.createEmployee(newEmployee).subscribe({
      next: () => {
        Toastify({
                  text: `Empleado creado correctamente`,
                  duration: 3000,
                  gravity: 'bottom',
                  position: 'right',
                  backgroundColor: '#78A75A',
                }).showToast();
        this.onClose();
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 409) {
          alert('El correo ya existe.');
        } else {
          console.log('Error creating employee', error);
        }
      },
    });
  }
}
