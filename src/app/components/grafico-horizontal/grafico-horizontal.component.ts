import { Component, OnInit, OnDestroy, Input } from '@angular/core';


@Component({
  selector: 'app-grafico-horizontal',
  templateUrl: './grafico-horizontal.component.html',
  styleUrls: ['./grafico-horizontal.component.scss']
})
export class GraficoHorizontalComponent implements OnInit, OnDestroy {

  @Input() resultados: any[];
  // public intervalo;
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';
  colorScheme = 'nightLights';

  constructor() {
    // this.resultados = [
    //   {
    //     'name': 'Juego 1',
    //     'value': 20
    //   },
    //   {
    //     'name': 'Juego 2',
    //     'value': 12
    //   },
    //   {
    //     'name': 'Juego 3',
    //     'value': 5
    //   },
    //   {
    //     'name': 'Juego 3',
    //     'value': 10
    //   }
    // ];

    // For of
    // for (const data of this.resultados) {
    //   console.log(Math.round(Math.random() * 500));
    //   data.value = Math.random();
    //   console.log('data.value: ', data.value);
    // }

    // For in
      // // tslint:disable-next-line: forin
      // for (const i in this.resultados) {
      //   console.log('tick');
      //   this.resultados[i].value = Math.round(Math.random() * 500);
      // }



    // this.intervalo = setInterval(() => {
    //   const nuevoResultado = [...this.resultados];
    //   console.log('nuevoResultado: ', nuevoResultado);
    //   // tslint:disable-next-line: forin
    //   // for (const i in nuevoResultado) {
    //   //   console.log('tick');
    //   //   nuevoResultado[i].value = Math.round(Math.random() * 500);
    //   // }

    //   for (const data of nuevoResultado) {
    //     data.value = Math.round(Math.random() * 500);
    //     console.log('data.value: ', data.value);
    //     console.log('data: ', data);
    //   }

    //   this.resultados = [...nuevoResultado];
    //   console.log('this.resultados: ', this.resultados);
    // }, 1500);

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // clearInterval(this.intervalo);
  }

  onSelect(event) {
    console.log(event);
  }

}
