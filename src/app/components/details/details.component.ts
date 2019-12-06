import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, RespuestaCredits, Cast } from '../../interfaces/interface';
import { ModalController } from '@ionic/angular';

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
  constructor(
    private moviesService:MoviesService,
    private modalController:ModalController) { }

  ngOnInit() {
    
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
  favoridoAdd(){
    console.log('ADD FAV,comign soon');
  }
}
