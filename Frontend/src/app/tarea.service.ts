import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private baseUrl = 'http://localhost:8080/api/tareas';
    private modals: any[] = [];


  constructor(private http: HttpClient) { }

  getTarea(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTarea(tarea: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, tarea);
  }

  deleteTarea(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getTareasList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  updateTarea(tarea: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update`, tarea);
  }

  getTareasByFilter(tareaFilter: any): Observable<any> {
    let params = new HttpParams();
    if (tareaFilter != null) {
        if (tareaFilter.id != null && tareaFilter.id !== '') {
            params = params.append('id', tareaFilter.id);
        }
        if (tareaFilter.descripcion != null && tareaFilter.descripcion !== '') {
            params = params.append('descripcion', tareaFilter.descripcion);
        }
        if (tareaFilter.estado != null && tareaFilter.estado !== '') {
            params = params.append('estado', tareaFilter.estado);
        }}
    return this.http.get(`${this.baseUrl}` + `/searchByFilter`, { params: params });
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }

  add(modal: any) {
        // add modal to array of active modals
        this.modals.push(modal);
    }

    remove(id: string) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x.id !== id);
    }

}
