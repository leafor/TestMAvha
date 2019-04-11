import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasListComponent } from './tareas-list/tareas-list.component';
import { CreateTareaComponent } from './create-tarea/create-tarea.component';
import { SearchTareasComponent } from './search-tareas/search-tareas.component';

const routes: Routes = [
    { path: '', redirectTo: 'tareas', pathMatch: 'full' },
    { path: 'tareas', component: TareasListComponent },
    { path: 'add', component: CreateTareaComponent },
    { path: 'searchByFilter', component: SearchTareasComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
