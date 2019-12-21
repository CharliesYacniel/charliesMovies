import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, RespuestaCredits, Cast } from '../../interfaces/interface';
import { ModalController } from '@ionic/angular';
import { DatalocalService } from '../../services/datalocal.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input() id;
  pelicula: PeliculaDetalle = {};
  credits: RespuestaCredits;
  ocularChar = 150;
  actores: Cast[] = [];
  optionSLides = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5,
  };
  estrella = 'star-outline';
  constructor(
                private moviesService:MoviesService,
                private modalController:ModalController,
                private datalocalService:DatalocalService
              ) { }

 ngOnInit() {
    this.datalocalService.existePelicula(this.id)
         .then( existe => { this.estrella = ( existe ) ? 'star' : 'star-outline'});

    this.moviesService.getMovieDetails(this.id)
        .subscribe(resp => {
              console.log('DESTAILS', resp);
              this.pelicula = resp;
        });

    this.moviesService.getMovieCredits(this.id)
        .subscribe(resp => {
              console.log('CREDITS', resp);
              this.credits = resp;
              this.actores = resp.cast;
        });
  }

  regresar() {
    console.log('texto');
    this.modalController.dismiss();
  }

  favoridoAdd() {
    const existe = this.datalocalService.guardarPelicula( this.pelicula );
    this.estrella = (existe) ? 'star' : 'star-outline';
  }
}
