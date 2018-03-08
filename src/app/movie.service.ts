import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieService {
  
  api: string = "?api_key=7288c5fe043602f7e97a1f5c7f4b5495";
  base_url: string = "https://api.themoviedb.org/3/movie/";
  
  constructor(private http: HttpClient) { }
  
  getData(){
      return this.http.get(this.base_url + 550 + this.api)
  }
  

}
