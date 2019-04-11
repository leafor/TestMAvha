import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateTareaComponent } from './create-tarea/create-tarea.component';
import { TareaDetailsComponent } from './tarea-details/tarea-details.component';
import { TareasListComponent } from './tareas-list/tareas-list.component';
import { SearchTareasComponent } from './search-tareas/search-tareas.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    CreateTareaComponent,
    TareaDetailsComponent,
    TareasListComponent,
    SearchTareasComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
