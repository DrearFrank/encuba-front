import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private API = 'http://localhost:3000/productos';

  constructor(private http: HttpClient) {}

  getHeaders() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
  }

  listar() {
    return this.http.get(this.API, this.getHeaders());
  }

  eliminar(id: number) {
    return this.http.delete(`${this.API}/${id}`, this.getHeaders());
  }
  push(product: any) {
    return this.http.post(this.API, product);
  }


  }
