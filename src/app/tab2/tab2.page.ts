import { Component } from '@angular/core';
// import { IonSearchbar, ModalController } from '@ionic/angular';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from 'src/app/interfaces/interface';
import { ModalController } from '@ionic/angular';
import { DetailsComponent } from '../components/details/details.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  // @ViewChild('search') search:IonSearchbar;
  textoBuscar = '';
  peliculas:Pelicula[] = [];
  buscando = false;
  ideas: string[] = ['Spiderman', 'Scary Movie', 'Mia Khalifa', 'Avengers'];
  constructor(private moviesService: MoviesService,
            private modalController:ModalController ) {}

  onSearchChange( event ) {
    // console.log(event.target.value);
    var valor: string = event.target.value;

    if( valor.length === 0) {
      this.buscando = false;
      this.peliculas = [];
      return;
    }

    this.buscando = true;
    this.moviesService.buscarPelicula(valor)
        .subscribe(resp => {
          this.peliculas = resp.results;
          this.buscando = false;
          console.log(this.peliculas);
        });
  }

async detalleMovie(id : string ) {
    const modal = await this.modalController.create({
      component: DetailsComponent,
      componentProps: {id}
    });

  await modal.present();

  }
  // setIdea(event){
  //  console.log(event.target.textContent);
  // //  this.search.value = event.target.textContent;
  // }

}
