import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  public juegos: any[];
  constructor(private angularFirestore: AngularFirestore) { }

  ngOnInit() {
    // hacer referencia a a colleccion/base de datos de firebase y ver los cambios en tiempo real que reciba la coleecion
    this.angularFirestore.collection('goty').valueChanges().pipe(map((res: Game[]) => {
      // return res.map(({name, votos}) => {({name, value: votos})});
      return res.map(juegos => {
        console.log('juegos: ', juegos);
        return {
          name: juegos.name,
          value: juegos.votos
        };
      });
    })).subscribe((juegos) => {
      this.juegos = juegos;
      console.log('juegos: ', juegos);
    });
  }

}
