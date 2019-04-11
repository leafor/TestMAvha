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

  updateEstado(estado: boolean) {
    this.tareaService.updateTarea(this.tarea.id,
      { descripcion: this.tarea.descripcion, estado: estado, imagen: this.tarea.imagen })
      .subscribe(
        data => {
          console.log(data);
          this.tarea = data as Tarea;
        },
        error => console.log(error));
  }

  deleteTarea() {
    this.tareaService.deleteTarea(this.tarea.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }
}
