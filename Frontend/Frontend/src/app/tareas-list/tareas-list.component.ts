import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Tarea } from '../tarea';
import { Media } from '../media';
import { TareaFilter } from '../tareaFilter';
import { TareaService } from '../tarea.service';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Alert } from 'selenium-webdriver';


interface Notif {
    type: string;
    message: string;
}

@Component({
    selector: 'tarea-list',
    templateUrl: './tareas-list.component.html',
    styleUrls: ['./tareas-list.component.css']
})


export class TareasListComponent implements OnInit, AfterContentChecked {

    alerts: Notif[];
    staticAlertClosed = false;
    closeResult: string;
    filter: TareaFilter;
    tareas: Tarea[];
    tarea: Tarea;
    imagen: Media;
    tareaSelected: Tarea;
    public uploader: FileUploader = new FileUploader({ url: '', itemAlias: 'photo' });
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

    detailsTarea(tareaSelected) {
        this.tareaSelected = tareaSelected;
    }


    setNewTarea() {
        this.imageSrc = null;
        this.tarea = new Tarea();
    }

    searchTareas() {
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
                    this.successResponse('Se ha eliminado tarea: ' , tarea);
                },
                error => this.errorResponse(error));
    }

    updateEstado(t: Tarea) {
        t.estado = !t.estado;
        this.tareaService.updateTarea( t )
            .subscribe(
                data => {
                    console.log(data);
                    this.tarea = data as Tarea;
                    this.searchTareas();
                    this.successResponse('Se actualizo la tarea: ' , data);
                },
                error => this.errorResponse(error));
    }

    limpiarFiltros() {
        this.filter = new TareaFilter();
    }

    save() {
        this.tareaService.createTarea(this.tarea)
            .subscribe(data => this.successResponse('Se ha creado tarea: ' , data), error => this.errorResponse(error));
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

    errorResponse(error) {
        console.log(error);
        this.alerts = Array.from([{
            type: 'danger',
            message: error.error.message,
        }]);
        this.searchTareas();
        this.staticAlertClosed = false;
        setTimeout(() => this.staticAlertClosed = true, 5000);
    }

    successResponse(mensaje, data) {
        this.alerts = Array.from([{
            type: 'success',
            message: mensaje + data.descripcion,
        }]);
        this.searchTareas();
        this.staticAlertClosed = false;
        setTimeout(() => this.staticAlertClosed = true, 5000);
    }

    close(alert: Notif) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }


}
