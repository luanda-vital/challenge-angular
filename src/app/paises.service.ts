import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root', // <---- Adiciona isto ao serviço
})

export class PaisesService {

  paisesUrl = 'https://restcountries.eu/rest/v2/all'

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.paisesUrl}`)
  }
}
