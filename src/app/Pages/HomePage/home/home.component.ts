import { Component } from '@angular/core';
import { MovieApiService } from 'src/app/Services/movie-api.service';
import { Title,Meta } from '@angular/platform-browser';

@Component({ selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.css'] })
export class HomeComponent {
  trendingMovies: any = [];
  actionMovies: any = [];
  adventureMovies: any = [];
  animationMovies: any = [];
  comedyMovies: any = [];
  documentaryMovies: any = [];
  sciencefictionMovies: any = [];
  thrillerMovies: any = [];

  constructor ( private movieAPI: MovieApiService, private title: Title, private meta: Meta ) {
    this.title.setTitle('Home - Netflix');
    this.meta.updateTag({ name: 'description', content: 'watch online movies' });
  }

  ngOnInit(): void {
    this.movieAPI.fetchTrendingMovies().subscribe( data => this.trendingMovies = data.results );
    this.movieAPI.fetchActionMovies().subscribe( data => this.actionMovies = data.results );
    this.movieAPI.fetchAdventureMovies().subscribe( data => this.adventureMovies = data.results );
    this.movieAPI.fetchAnimationMovies().subscribe( data => this.animationMovies = data.results );
    this.movieAPI.fetchComedyMovies().subscribe( data => this.comedyMovies = data.results );
    this.movieAPI.fetchDocumentaryMovies().subscribe( data => this.documentaryMovies = data.results );
    this.movieAPI.fetchSiFiMovies().subscribe( data => this.sciencefictionMovies = data.results );
    this.movieAPI.fetchThrillerMovies().subscribe( data => this.thrillerMovies = data.results );
  }
}