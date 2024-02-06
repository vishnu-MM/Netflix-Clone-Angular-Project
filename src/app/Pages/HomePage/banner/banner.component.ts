import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/Services/movie-api.service';

@Component({ selector: 'banner', templateUrl: './banner.component.html', styleUrls: ['./banner.component.css'] })
export class BannerComponent implements OnInit {
  bannerList: any[] = [];

  constructor ( private movieAPI: MovieApiService ) {}

  ngOnInit(): void {
    this.movieAPI.fetchBannerDetails().subscribe( result => this.bannerList = result.results );
  }
}
