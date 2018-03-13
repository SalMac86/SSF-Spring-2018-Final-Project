import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieService {
  
  api: string = "?api_key=7288c5fe043602f7e97a1f5c7f4b5495";
  options: string = "&include_adult=false&language=en-US";
  base_url: string = "https://api.themoviedb.org/3/search/movie";
  
  constructor(private http: HttpClient) { }
  
  getData(query: string){
      return this.http.get(this.base_url + this.api + this.options + "&query=" + query)
  }
  

}
