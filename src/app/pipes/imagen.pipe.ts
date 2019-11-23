import { Pipe, PipeTransform } from '@angular/core';

const url = 'https://image.tmdb.org/t/p';
@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(image: string, size : string = 'w500'): any {
    if( !image) {
      return './assets/no-image-banner.jpg';
    }
    const img_url =  `${url}/${size}${image}`;
    // console.log(img_url);
    return img_url;
  }

}
