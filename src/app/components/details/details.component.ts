import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, RespuestaCredits } from '../../interfaces/interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input() id;
  pelicula: PeliculaDetalle = {};
  credits: RespuestaCredits;
  constructor(private moviesService:MoviesService) { }

  ngOnInit() {
    
    this.moviesService.getMovieDetails(this.id)
        .subscribe(resp => {
              console.log('DESTAILS', resp);
              this.pelicula=resp;
        });
    this.moviesService.getMovieCredits(this.id)
        .subscribe(resp => {
              console.log('CREDITS', resp);
              this.credits = resp;
        });
  }

}
