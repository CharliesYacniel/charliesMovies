import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/interface';
import { ModalController } from '@ionic/angular';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {
  @Input() movieFeatures: Pelicula[] = [];
  
  optionSLides = {
    slidesPerView: 3,
    freeMode: true
  };
  constructor(private modalController:ModalController) { }

  ngOnInit() {}
  
  async moviePosterDetails(id: string) {
    const modal = await this.modalController.create({
                 component: DetailsComponent,
                 componentProps: {id}
               });
    await modal.present();

    // const {data} = await modal.onDidDismiss();
    // console.log('Retorno del modal POSTER', data || 'No retorno parametros');
 }

}
