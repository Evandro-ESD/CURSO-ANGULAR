import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpClient) { }

  url = `http://localhost:3000`

  getData(path:string):Observable<any>{
    return this.http.get<any[]>(`${this.url}/${path}`)
  }
}
