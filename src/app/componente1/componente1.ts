import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente1.html',
  styleUrls: ['./componente1.css']
})
export class ProductoCardComponent {
  @Input() nombre = '';
}