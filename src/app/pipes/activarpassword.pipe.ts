import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activarpassword'
})
export class ActivarpasswordPipe implements PipeTransform {

  transform(value: string, textoNormal: boolean = true): string {
    let valorLongitud = 0;
    let longitud = value.length;
    for (let index = 0; index <= longitud; index++) {
      valorLongitud = index
    }
    if ( textoNormal == true ) {
        return value;
    }
    return  longitud.toString();
  }

}
