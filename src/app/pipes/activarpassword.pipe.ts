import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activarpassword'
})
export class ActivarpasswordPipe implements PipeTransform {
  
  cifrado: string[] = [];

  transform(value: string, mostrar: boolean = false): string {
    // uso de operador ternario, 3 argumentos que toma, mucho mas rapido y legible
    return ( mostrar ) ? '*'.repeat( value.length ) : value;
  }

}
