import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Ej01LabIV';
  public edadUno = 0;
  public edadDos = 0;
  public promedio: number = 0;
  public suma: number = 0;
  public mostrar: boolean = false;

  public calcular(): void{
    this.promedio = (this.edadUno + this.edadDos)/2;
    this.suma = this.edadUno + this.edadDos;
    this.mostrar = true;
  }

  public limpiar(): void{
    this.edadUno=0;
    this.edadDos=0;
    this.promedio=0;
    this.suma=0;
    this.mostrar=false;
  }

}
