import { Component, OnInit, AfterContentChecked, Input } from '@angular/core';
import { Tarea } from '../tarea';
import { TareaFilter } from '../tareaFilter';
import { TareaService } from '../tarea.service';
import { Observable } from 'rxjs';

import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'tarea-list',
    templateUrl: './tareas-list.component.html',
    styleUrls: ['./tareas-list.component.css']
})
export class TareasListComponent implements OnInit, AfterContentChecked {
    closeResult: string;
    filter: TareaFilter;
    tareas: Tarea[];
    displayedColumns: string[] = ['id', 'descripcion', 'detalle'];
    // tareas: Observable<Tarea[]>;
    tarea: Tarea;
    // @Input() tarea: Tarea;

    constructor(private tareaService: TareaService, public ngxSmartModalService: NgxSmartModalService) { }

    ngAfterContentChecked(): void {
        this.tarea = new Tarea();
    }

    ngOnInit() {
        this.filter = new TareaFilter();
        this.searchTareas();
    }

    private setNewTarea() {
        this.tarea = new Tarea();
    }

    private searchTareas() {
        this.tareaService.getTareasByFilter(this.filter)
            .subscribe(tareas => this.tareas = tareas);
    }

    deleteTareas() {
        this.tareaService.deleteAll()
            .subscribe(
                data => {
                    console.log(data);
                    this.searchTareas();
                },
                error => console.log('ERROR: ' + error));
    }

    deleteTarea(tarea) {
        this.tareaService.deleteTarea(tarea.id)
            .subscribe(
                data => {
                    console.log(data);
                    this.searchTareas();
                },
                error => console.log(error));
    }

    limpiarFiltros() {
        this.filter = new TareaFilter();
    }

    save() {
    this.tareaService.createTarea(this.tarea)
      .subscribe(data => console.log(data), error => console.log(error));
    this.tarea = new Tarea();
  }


    onSubmit() {
        this.searchTareas();
    }
}
