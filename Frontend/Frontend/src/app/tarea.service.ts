import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private baseUrl = 'http://localhost:8080/api/tareas';

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

  updateTarea(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  getTareasByFilter(tareaFilter: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/searchByFilter`, tareaFilter);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
}
