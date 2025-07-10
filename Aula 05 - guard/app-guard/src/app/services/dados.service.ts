import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DadosService {
  dados: any;
  Url = `https://jsonplaceholder.typicode.com/users`

  constructor(public http: HttpClient) { }

  getDados() {
    this.http.get(this.Url).subscribe(response=>{
      console.log(response)
    })
  }

}
