import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(image: string, size: string = 'w500'): any {
    if ( !image) {
      return environment.pathImageNotFound;
    }
    // console.log('url imagen',image)
    return `${environment.pathImage}/${size}${image}`;
  }

}
