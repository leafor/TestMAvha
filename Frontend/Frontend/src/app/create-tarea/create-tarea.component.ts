import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea';
import { TareaService } from '../tarea.service';

import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'create-tarea',
  templateUrl: './create-tarea.component.html',
  styleUrls: ['./create-tarea.component.css']
})
export class CreateTareaComponent implements OnInit {

  tarea: Tarea = new Tarea();
  submitted = false;

  constructor(private tareaService: TareaService, public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }

  newTarea(): void {
    this.submitted = false;
    this.tarea = new Tarea();
  }

  save() {
    this.tareaService.createTarea(this.tarea)
      .subscribe(data => console.log(data), error => console.log(error));
    this.tarea = new Tarea();
  }

//   ngxSmartModalService.getModal('classicModal').onEscape.subscribe((modal: NgxSmartModalComponent) => {
//       console.log('You just escaped the classicModal!', modal);
//     });

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
