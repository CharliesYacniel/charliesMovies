import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import {  Pelicula } from '../interfaces/interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  movieArray:Pelicula [] = [];
  
  optionSLides = {
    slidesPerView: 1.1,
    freeMode: true
  };

  constructor(private moviesService: MoviesService ) {}
  ngOnInit() {
    this.moviesService.getMovieFeture()
      .subscribe((dataMovies) => {
        console.log(dataMovies);
        this.movieArray = dataMovies.results;
      });
  }
}
