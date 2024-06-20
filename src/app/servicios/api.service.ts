import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private usuario:  Usuario= { usuario: "", contra: "", role: ""};




  private listarComics = `http://localhost:8080/comics`




  constructor(private http: HttpClient) { }

  public listComics(): Observable<any[]> {
   
      return this.http.get<any[]>(this.listarComics);
  
    
  }

}
