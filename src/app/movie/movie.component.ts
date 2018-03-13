import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  data: any;
  savedMovie: any;
  savedMovies: any = [];
  results: object;
  searchTerm$ = new Subject<string>();
  
  constructor(private _movie: MovieService) {
    this.updateResults();
  }
  
  ngOnInit() {
    // this._movie.getData("Fight Club").subscribe(data => console.log(data))
  }
  updateResults() {
    this._movie.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results;
      });
    console.log(this._movie.savedMovies);
  }
  searchMovie(movie){
    this._movie.getData(movie)
      .subscribe(response => {
        console.log(response)
        this.data = response.results
        console.log(this.data)
      }
      )
  }
  
  selectMovie(saver){
    this.savedMovie = saver;
    this._movie.savedMovies.push(this.savedMovie);
    console.log(this.savedMovie.title +" has been saved")
    console.log(this.savedMovie)
    this.updateResults();
  }
}
