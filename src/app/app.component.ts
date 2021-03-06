import { Component } from '@angular/core';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'capitan America';
  nombre2Capitalizador: string = 'JoSe DoNaLDo LuNa gUaRdAdO';
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI : number = Math.PI;
  Porcentaje: number = 0.234;
  salario: number = 1234.5;
  fecha:Date = new Date();
  videoUrl: string = 'https://www.youtube.com/embed/M5QY2_8704o';
  activar: boolean = false;

  valorpromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 2000);
  })

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'primera',
      casa: 20
    }
  }
}
