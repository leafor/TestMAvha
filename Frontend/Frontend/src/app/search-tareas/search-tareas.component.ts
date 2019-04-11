import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea';
import { TareaFilter } from '../tareaFilter';
import { TareaService } from '../tarea.service';

@Component({
  selector: 'search-tareas',
  templateUrl: './search-tareas.component.html',
  styleUrls: ['./search-tareas.component.css']
})
export class SearchTareasComponent implements OnInit {

  filter: TareaFilter;
  tareas: Tarea[];

  constructor(private dataService: TareaService) { }

  ngOnInit() {
    this.filter = new TareaFilter();
  }

  private searchTareas() {
    this.dataService.getTareasByFilter(this.filter)
      .subscribe(tareas => this.tareas = tareas);
  }

  onSubmit() {
    this.searchTareas();
  }
}
