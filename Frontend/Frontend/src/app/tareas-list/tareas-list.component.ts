import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TareaService } from '../tarea.service';
import { Tarea } from '../tarea';

@Component({
  selector: 'tarea-list',
  templateUrl: './tareas-list.component.html',
  styleUrls: ['./tareas-list.component.css']
})
export class TareasListComponent implements OnInit {
    displayedColumns: string[] = ['id', 'descripcion', 'detalle'];
    tareas: Observable<Tarea[]>;

  constructor(private tareaService: TareaService) { }

  ngOnInit() {
    this.reloadData();
  }

  deleteTareas() {
    this.tareaService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }

  reloadData() {
    this.tareas = this.tareaService.getTareasList();
  }
}
