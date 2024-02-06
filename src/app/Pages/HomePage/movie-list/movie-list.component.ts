import { Component, Input } from '@angular/core';

@Component({ selector: 'movie-list', templateUrl: './movie-list.component.html', styleUrls: ['./movie-list.component.css'] })
export class MovieListComponent {
  @Input('MovieList') movies : any[] = [];
  baseUrl : string = 'https://image.tmdb.org/t/p/original/';
}
