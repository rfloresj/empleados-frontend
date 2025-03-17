import { Component, OnInit } from '@angular/core';
import { AreaComponent } from './area/area.component';
import { NewAreaComponent } from './new-area/new-area.component';
import { AppMenuComponent } from '../app-menu/app-menu.component';
import { AreaService, Area } from '../../services/area.service';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

@Component({
  selector: 'app-areas',
  imports: [AreaComponent, NewAreaComponent, AppMenuComponent],
  templateUrl: './areas.component.html',
  styleUrl: './areas.component.css',
})
export class AreasComponent implements OnInit {
  areas: Area[] = [];
  isEditingArea = false;
  isAddingArea = false;
  selectedArea: Area | null = null;

  constructor(private areaService: AreaService) {}

  ngOnInit(): void {
    this.loadAreas();
  }

  loadAreas(): void {
    this.areaService.getAreas().subscribe({
      next: (data) => (this.areas = data),
      error: (err) => console.log('Error loading areas', err),
    });
  }

  onStartEditArea(id: number): void {
    this.selectedArea = this.areas.find((a) => a.id === id) || null;
    this.isEditingArea = !!this.selectedArea;
  }

  onCloseEditArea(): void {
    this.isEditingArea = false;
    this.loadAreas();
  }

  onStartAddArea(): void {
    this.isAddingArea = true;
  }

  onCloseAddArea(): void {
    this.isAddingArea = false;
    this.loadAreas();
  }

  onDeleteArea(id: number): void {
    const areaName =
      this.areas.find((a) => a.id === id)?.description ?? 'desconocida';

    if (confirm(`¿Estás seguro que deseas eliminar el área ${areaName}?`)) {
      this.areaService.deleteArea(id).subscribe({
        next: () => {
          Toastify({
            text: `Área "${areaName}" eliminada correctamente.`,
            duration: 3000,
            gravity: 'bottom',
            position: 'right',
            backgroundColor: '#0D6EFD',
          }).showToast();
          this.loadAreas();
        },
        error: (error) => {
          console.log('Error al eliminar el área', error);
          alert(
            `No se puede eliminar el área "${areaName}" porque tiene empleados asignados.`
          );
        },
      });
    }
  }
}
