import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-app-menu',
  imports: [RouterModule],
  templateUrl: './app-menu.component.html',
  styleUrl: './app-menu.component.css',
})
export class AppMenuComponent {
  @Output() addEmployee = new EventEmitter<void>();
  @Output() addArea = new EventEmitter<void>();

  constructor(private router: Router) {}

  get buttonLabel(): string {
    return this.router.url.includes('/areas')
      ? 'Agregar Área'
      : 'Agregar Empleado';
  }

  onAddRecord() {
    if (this.router.url.includes('/areas')) {
      this.addArea.emit();
    } else {
      this.addEmployee.emit();
    }
  }
}
