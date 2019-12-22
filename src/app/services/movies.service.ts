import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaMDB, PeliculaDetalle, RespuestaCredits, Genre } from '../interfaces/interface';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
   // tslint:disable-next-line:max-line-length
   url = `&api_key=${environment.apiKey}&language=${environment.language}&include_image_language=${environment.language}`;
  popularPage = 0;
  generos :Genre[] = [];
  constructor(private httpClient:HttpClient) { }
  
  
  private executeQuery<T>(query: string) {
       query = query + this.url;
      //  console.log(query);
       return this.httpClient.get<T>(query);
  }

  getPopular() {
    this.popularPage++;
    const query = `${environment.url}/discover/movie?sort_by=popularity.desc&page=${this.popularPage}`;
    return this.executeQuery<RespuestaMDB>(query);
  }

  buscarPelicula( texto: string ) {
      return this.executeQuery<RespuestaMDB>(`${environment.url}/search/movie?query=${texto}`);
  }

  getMovieFeture() {
      const hoy = new Date();
      let mesString ;
      const mes = hoy.getMonth() + 1 ;
      let diaString;
      const ultimodia = hoy.getDate();

      if ( mes < 10) {
        mesString = '0' + mes;
      } else {
        mesString = mes;
      }

      if ( ultimodia < 10) {
        diaString = '0' + ultimodia;
      } else {
        diaString = ultimodia;
      }
      const fechaInicio = `${hoy.getFullYear()}-${mesString - 1}-01`;
      const fechaFin    = `${hoy.getFullYear()}-${mesString}-${diaString}`;
      let cosulta = `${environment.url}/discover/movie?primary_release_date.gte=${fechaInicio}&primary_release_date.lte=${fechaFin}`;
      return this.executeQuery<RespuestaMDB>( cosulta);
  }

  getMovieDetails( movie_id : string) {
    return this.executeQuery<PeliculaDetalle>(`${environment.url}/movie/${movie_id}?a=1`);
  }
  getMovieCredits( movie_id : string) {
    return this.executeQuery<RespuestaCredits>(`${environment.url}/movie/${movie_id}/credits?a=1`);
  }


  cargarGeneros(): Promise<Genre[]> {

    return new Promise(resolve => {
      this.executeQuery<PeliculaDetalle>(`${environment.url}/genre/movie/list?a=1`)
          .subscribe(resp => {
            this.generos = resp['genres'];
            // console.log('generos', this.generos);
            resolve( this.generos);
          });
    });
  }
}
