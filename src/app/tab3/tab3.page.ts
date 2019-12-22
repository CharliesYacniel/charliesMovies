import { Component, OnInit } from '@angular/core';
import { PeliculaDetalle, Genre, Pelicula } from '../interfaces/interface';
import { DatalocalService } from '../services/datalocal.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  {

  peliculas: PeliculaDetalle[] = [];
  generos:Genre[] = [];

  favoritoPorGenero: any[] = [];

  constructor( private datalocalService: DatalocalService,
               private moviesService: MoviesService
              ) {}


  async ionViewWillEnter() {
    this.peliculas = await this.datalocalService.cargarfavoritos();
    console.log('Peliculas Favoritos', this.peliculas);
    this.generos = await this.moviesService.cargarGeneros();
    console.log('Generos ',this.generos);

    this.pelisPorGenero(this.generos,this.peliculas);
  }

  pelisPorGenero(generosArray: Genre[], peliculas: PeliculaDetalle[]) {
    this.favoritoPorGenero = [];
    generosArray.forEach( genero => {
        this.favoritoPorGenero.push({
                                      genero : genero.name,
                                      pelis : peliculas.filter(peli => {
                                        return peli.genres.find(genre => genre.id === genero.id)
                                        })
                                    });
    });
    // for ( let genero of generosArray ) {
    //   this.favoritoPorGenero.unshift({ genero : genero.name,
    //                                    pelis: peliculas.filter(peli => {
    //                                           return peli.genres.find(genre => genre.id === genero.id)
    //                                   })
    //                                   // pelis : peliculas.filter(peli => peli.genres.find(genre => genre.id === genero.id) )
    //                                 });
    // }

    console.log('fav por generos', this.favoritoPorGenero);
  }
}
