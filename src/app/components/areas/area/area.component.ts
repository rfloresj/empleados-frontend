import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AreaService, Area } from '../../../services/area.service';
import { HttpErrorResponse } from '@angular/common/http';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

@Component({
  selector: 'app-area',
  imports: [FormsModule],
  templateUrl: './area.component.html',
  styleUrl: './area.component.css',
})
export class AreaComponent implements OnInit {
  @Input() areaToEdit: Area | null = null;
  @Output() close = new EventEmitter<void>();
  enteredArea = '';

  constructor(private areaService: AreaService) {}

  ngOnInit(): void {
    if (this.areaToEdit) {
      this.enteredArea = this.areaToEdit.description;
    }
  }

  onClose(): void {
    this.close.emit();
  }

  onSubmit(): void {
    if (!this.enteredArea.trim()) {
      alert('El área es obligatoria.');
      return;
    }
    if (this.areaToEdit) {
      this.areaService
        .updateArea(this.areaToEdit.id, { description: this.enteredArea })
        .subscribe({
          next: () => {
            confirm(
              `¿ Estás seguro que deseas actualizar el nombre del área a "${this.enteredArea}" ?, todos los registros asociados a los empleados se actualizarán.`
            );
            Toastify({
                      text: `Área actualizada correctamente a "${this.enteredArea}".`,
                      duration: 3000,
                      gravity: 'bottom',
                      position: 'right',
                      backgroundColor: '#78A75A',
                    }).showToast();
            this.close.emit();
          },
          error: (error: HttpErrorResponse) => {
            if (error.status === 409) {
              alert('El área ya existe.');
            } else {
              console.log('Error creating area', error);
            }
          },
        });
    }
  }
}
