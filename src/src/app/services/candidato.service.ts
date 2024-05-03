import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../settings/appsettings';
import { Candidato } from '../interfaces/candidato';
import { ResponseAPI } from '../interfaces/response-api';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  private http = inject(HttpClient)
  private apiUrl:string = appsettings.apiUrl + 'candidato'
  
  constructor() { }

  listar(){
    return this.http.get<Candidato[]>(this.apiUrl);
  }

  obtener(id:number){
    return this.http.get<Candidato>(`${this.apiUrl}/${id}`);
  }

  crear(objeto:Candidato){
    return this.http.post<ResponseAPI>(this.apiUrl,objeto);
  }

  editar(objeto:Candidato){
    return this.http.put<ResponseAPI>(this.apiUrl,objeto);
  }

  eliminar(id:number){
    return this.http.delete<ResponseAPI>(`${this.apiUrl}/${id}`);
  }



}
