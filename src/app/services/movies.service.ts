import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaMDB } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
   // tslint:disable-next-line:max-line-length
   url = 'https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-01-01&primary_release_date.lte=2019-11-22&api_key=160db8da4b62ffcf685f750fc01a104f&language=es&include_image_language=es';
  constructor(private httpClient:HttpClient) { }
   
  getMovieFeture() {
   return this.httpClient.get<RespuestaMDB>(this.url);
  }
}
