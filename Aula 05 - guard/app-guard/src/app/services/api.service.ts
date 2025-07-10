import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
HttpClient
Observable

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  Url = `https://jsonplaceholder.typicode.com/users`

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.Url)
  }
}
