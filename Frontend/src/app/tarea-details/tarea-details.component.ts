import { Component, OnInit, Input } from '@angular/core';
import { TareaService } from '../tarea.service';
import { Tarea } from '../tarea';

import { TareasListComponent } from '../tareas-list/tareas-list.component';

@Component({
  selector: 'tarea-details',
  templateUrl: './tarea-details.component.html',
  styleUrls: ['./tarea-details.component.css']
})
export class TareaDetailsComponent implements OnInit {

  @Input() tarea: Tarea;
  constructor(private tareaService: TareaService, private listComponent: TareasListComponent) { }

  ngOnInit() {
  }

}
