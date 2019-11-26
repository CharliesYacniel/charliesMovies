import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interface';

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
  constructor() { }

  ngOnInit() {}
  
  onClick() {
    console.log('cargar + movies');
    this.cargarMas.emit();
  }

}
