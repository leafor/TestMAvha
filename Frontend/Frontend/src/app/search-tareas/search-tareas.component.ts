import { Component, OnInit, AfterContentChecked, Input } from '@angular/core';
import { Tarea } from '../tarea';
import { TareaFilter } from '../tareaFilter';
import { TareaService } from '../tarea.service';

import { NgxSmartModalService } from 'ngx-smart-modal';
@Component({
  selector: 'search-tareas',
  templateUrl: './search-tareas.component.html',
  styleUrls: ['./search-tareas.component.css']
})


export class SearchTareasComponent implements OnInit, AfterContentChecked {
closeResult: string;
  filter: TareaFilter;
  tareas: Tarea[];

  @Input() tarea: Tarea;

  constructor(private dataService: TareaService, public ngxSmartModalService: NgxSmartModalService) { }


    ngAfterContentChecked(): void {
    }

  ngOnInit() {
    this.filter = new TareaFilter();
  }

  private setNewTarea() {
      this.tarea = new Tarea();
  }

  private searchTareas() {
    this.dataService.getTareasByFilter(this.filter)
      .subscribe(tareas => this.tareas = tareas);
  }

  onSubmit() {
    this.searchTareas();
  }
}
