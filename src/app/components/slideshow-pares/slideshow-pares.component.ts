import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interface';
import { ModalController } from '@ionic/angular';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {
  @Input() peliculas: Pelicula[] = [];
  @Output() cargarMas = new EventEmitter();

  optionSLides = {
    slidesPerView: 3.1,
    freeMode: true,
    spaceBetween: -10,
  };
  constructor(private modalController:ModalController) { }

  ngOnInit() {}
  
  onClick() {
    console.log('cargar + movies');
    this.cargarMas.emit();
  }
  async moviePairDetails(id: string) {
    const modal = await this.modalController.create({
                 component: DetailsComponent,
                 componentProps: {id}
               });
    await modal.present();

    // const {data} = await modal.onDidDismiss();
    // console.log('Retorno del modal PARES', data || 'No retorno parametros');
 }

}
