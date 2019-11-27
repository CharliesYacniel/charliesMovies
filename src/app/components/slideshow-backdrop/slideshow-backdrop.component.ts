import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/interface';

import { DetailsComponent } from '../details/details.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {
  
  @Input() peliculas: Pelicula[] = [];
  optionSLides = {
    slidesPerView: 1.1,
    freeMode: true
  };
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async viewDetailMovie(id: string) {
    const modal = await this.modalController.create({
                 component: DetailsComponent,
                 componentProps: {id}
               });
    await modal.present();

    // const {data} = await modal.onDidDismiss();
    // console.log('Retorno del modal BACKDROP', data || 'No retorno parametros');
 }

}
