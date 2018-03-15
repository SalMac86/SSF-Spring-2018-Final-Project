import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  @Input() favorites;
  
  constructor(private _movie: MovieService) { }

  ngOnInit() {
    this.favorites = this._movie.savedMovies;
  }

}
