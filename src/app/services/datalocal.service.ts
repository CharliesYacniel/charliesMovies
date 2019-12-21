import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PeliculaDetalle } from '../interfaces/interface';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DatalocalService {
  peliculas: PeliculaDetalle[] = [];
  constructor(private storage: Storage,
              private toastController:ToastController ) { 
                this.cargarfavoritos();
              }


  guardarPelicula(pelicula:PeliculaDetalle) {
    let existe = false;
    let mensaje = '';
    for (let peli of this.peliculas) {
      if ( peli.id === pelicula.id ) {
        existe = true;
        break;
      }
    }

    if ( existe ) {
      this.peliculas = this.peliculas.filter( peli => peli.id !== pelicula.id);
      mensaje = 'Removido de favoritos';
    } else {
      this.peliculas.push( pelicula );
      mensaje = 'Agregadp a favoritos';
    }
    this.presentToast(mensaje);
    this.storage.set('peliculas', this.peliculas);

    return !existe;
  }


  async presentToast( message: string) {
    const toast = await this.toastController.create({
      header: 'Favorito',
      message,
      duration: 1500,
      color: 'dark',
      position: 'top',
    });
    toast.present();
  }


  async cargarfavoritos() {
    const peliculas = await this.storage.get('peliculas');
    this.peliculas = peliculas || [];
    return this.peliculas;
  }

  async existePelicula( id ) {
        await this.cargarfavoritos();
        const existe = this.peliculas.find( peli => peli.id === id );
        return (existe) ? true : false;
  }
}
