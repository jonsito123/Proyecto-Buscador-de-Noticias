import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http:HttpClient) {

   
   }

   getNoticias(parametros:any):Observable<any>{
    const url=`https://newsapi.org/v2/top-headlines?country=${parametros.pais}&category=${parametros.categoria}&apiKey=1fbfc14b577c48ccb742956631a7ee36`;

    return this.http.get(url)
   }
}
