import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TareaDetailsComponent } from './tarea-details/tarea-details.component';
import { TareasListComponent } from './tareas-list/tareas-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { NgSwitcheryModule } from 'angular-switchery-ios';
import { FileSelectDirective } from 'ng2-file-upload';
@NgModule({
  declarations: [
    AppComponent,
    TareaDetailsComponent,
    FileSelectDirective,
    TareasListComponent

  ],
  imports: [
    NgxSmartModalModule.forRoot(),
    NgSwitcheryModule,
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
