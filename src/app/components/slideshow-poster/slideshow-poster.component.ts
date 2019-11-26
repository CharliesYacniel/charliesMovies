import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/interface';

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
  constructor() { }

  ngOnInit() {}

}
