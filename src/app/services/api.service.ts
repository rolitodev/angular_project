import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  public API: string = 'https://crudcrud.com/api/b0e5cc1c94c64333882bb9af82fbca9d';

  constructor(private http: HttpClient) { }

  // Petición para obtener todos los usuarios
  getAllUsers(): Observable<any> {
    return this.http.get(`${this.API}/users`)
    .pipe(
      map((response: any) => {
        console.log('all users', response);
      })
    )
  }

  // Petición para registrar un nuevo usuario
  createUser(payload: any): Observable<any> {
    return this.http.post(`${this.API}/users`, payload)
    .pipe(
      map((response: any) => {
        console.log('response', response);
      })
    );
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.API}/users/${id}`)
    .pipe(
      map((response: any) => {
        console.log('usuario eliminado', response);
      })
    );
  }

}
