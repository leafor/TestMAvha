import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasListComponent } from './tareas-list/tareas-list.component';


const routes: Routes = [
    { path: '', redirectTo: 'tareas', pathMatch: 'full' },
    { path: 'tareas', component: TareasListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
