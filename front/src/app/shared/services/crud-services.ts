import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Injectable({ providedIn: 'root' })

export class CrudServices {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  serverURL = environment.serverUrl;

  constructor(private http: HttpClient) {
  }

  /*************************** Servicios CRUD para la API ***************************/

  // Solicitud GET
  getRequest(path:any): Observable<string> {
    return this.http.get<string>(this.serverURL + path, this.httpOptions);
  }

  // Solicitud POST
  postRequest(path:any, info:any): Observable<string> {
    return this.http.post<string>(this.serverURL + path, info, this.httpOptions);
  }

  // Solicitud DELETE
  deleteRequest(path:any): Observable<string> {
    return this.http.delete<string>(this.serverURL + path, this.httpOptions);
  }

}
