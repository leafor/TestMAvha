import { Component, OnInit, AfterContentChecked} from '@angular/core';
import { Tarea } from '../tarea';
import { Media } from '../media';
import { TareaFilter } from '../tareaFilter';
import { TareaService } from '../tarea.service';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
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
    tarea: Tarea;
    imagen: Media;
    tareaSelected: Tarea;
    public uploader: FileUploader = new FileUploader({url: '', itemAlias: 'photo'});
    imageSrc: any;

    constructor(private tareaService: TareaService, public ngxSmartModalService: NgxSmartModalService) { }

    ngAfterContentChecked(): void {
    }

    onFileChanged(event) {
        const file = event.target.files[0];
        this.tarea.imagen = file;
    }

    ngOnInit() {
        this.filter = new TareaFilter();
        this.tarea = new Tarea();
        this.tareaSelected = new Tarea();
        this.searchTareas();
    }

    detailsTarea( tareaSelected) {
      this.tareaSelected = tareaSelected;
    }


    private setNewTarea() {
        this.imageSrc = null;
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

    updateEstado(t: Tarea) {
        this.tarea = t;
    this.tareaService.updateTarea(this.tarea.id,
      {id: this.tarea.id, descripcion: this.tarea.descripcion, estado: !this.tarea.estado, imagen: this.tarea.imagen })
      .subscribe(
        data => {
          console.log(data);
          this.tarea = data as Tarea;
        },
        error => console.log(error));
  }

    limpiarFiltros() {
        this.filter = new TareaFilter();
    }

    save() {
        this.tareaService.createTarea(this.tarea)
      .subscribe(data => console.log(data), error => console.log(error));
    }

    handleInputChange(e) {
    // tslint:disable-next-line:prefer-const
    let file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.imageSrc = reader.result;
    this.tarea.imagen = this.imageSrc;
    console.log(this.imageSrc);
  }


}
