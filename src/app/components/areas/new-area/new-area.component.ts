import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AreaService } from '../../../services/area.service';
import { HttpErrorResponse } from '@angular/common/http';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

@Component({
  selector: 'app-new-area',
  imports: [FormsModule],
  templateUrl: './new-area.component.html',
  styleUrl: './new-area.component.css',
})
export class NewAreaComponent {
  @Output() close = new EventEmitter<void>();
  enteredArea = '';

  constructor(private areaService: AreaService) {}

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    if (!this.enteredArea.trim()) {
      alert('El área es obligatoria.');
      return;
    }

    this.areaService.createArea({ description: this.enteredArea }).subscribe({
      next: () => {
        Toastify({
          text: `Área ${this.enteredArea} creada correctamente`,
          duration: 3000,
          gravity: 'bottom',
          position: 'right',
          backgroundColor: '#78A75A',
        }).showToast();
        this.onClose();
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
