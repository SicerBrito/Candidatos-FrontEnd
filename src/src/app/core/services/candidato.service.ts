import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Candidato } from '../../interfaces/candidato';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  constructor(private http: HttpClient) { }

  getCandidatoList(): Observable<Candidato[]> {
    return this.http.get<Candidato[]>(`http://localhost:9000/api/sicer/candidato`)
    .pipe(catchError((error: HttpErrorResponse) => {
      let errorMessage = "";

    if(error.error instanceof ErrorEvent){
          errorMessage = `Error: ${error.error.message}`;
    }else{
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(() => errorMessage);
    }));
  }

}
