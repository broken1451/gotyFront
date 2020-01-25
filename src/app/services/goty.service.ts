import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';
import { of } from 'rxjs'; // of(Esto permite regresar cualquiero cosa que yo quiera como un observable)
import { tap, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';




@Injectable({
  providedIn: 'root'
})
export class GotyService {

   // opcional para no hacer la peticion siempre
   private juegos: Game[] = [];

  constructor(private httpClient: HttpClient) {}


  getNominados() {

    // return this.httpClient.get<Game[]>(`${environment.url}/api/goty`);

    // opcional para no hacer la peticion siempre si ya se tiene la data
    if (this.juegos.length > 0) {
      console.log('Desde cache');
      // No tenemos juegos
      // of(Esto permite regresar cualquiero cosa que yo quiera como un observable)
      return of(this.juegos);
    } else {
      console.log('Desde Internet');
      return this.httpClient.get<Game[]>(`${environment.url}/api/goty`)
                            .pipe( tap(juegos => {
                              this.juegos = juegos;
                            }));
    }
  }

  votarJuego(id: string) {
    return this.httpClient.post(`${environment.url}/api/goty/${id}`, {});
                          // .pipe(catchError((err) => {
                          //   console.log('err err: ', err);
                          //   return Swal.fire('Opss', err.error.mensaje, 'error');
                          //   // return err.error;
                          // }));
  }




}
