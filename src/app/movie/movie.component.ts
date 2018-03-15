import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  data: any;
  savedMovie: any;
  
  constructor(private _movie: MovieService) { }
  
  ngOnInit() {
    // this._movie.getData("Fight Club").subscribe(data => console.log(data))
  }

  searchMovie(movie){
    this._movie.getData(movie)
      .subscribe(response => {
        console.log(response)
        this.data = response["results"]
        console.log(this.data)
      }
      )
  }
  
  selectMovie(saver){
    this.savedMovie = saver;
    this._movie.favorites.push(saver);
    console.log(this.savedMovie.title +" has been saved")
    console.log(this.savedMovie)
  }
}
