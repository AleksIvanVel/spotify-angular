import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
 @Input() nombre: String='';

  constructor(){
}
}
