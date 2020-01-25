import { Component, OnInit } from '@angular/core';
import { GotyService } from '../../services/goty.service';
import { Game } from '../../interfaces/interfaces';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.scss']
})
export class GotyComponent implements OnInit {

  public juegos: Game[] = [];

  constructor(private gotyService: GotyService) { }

  ngOnInit() {
    this.gotyService.getNominados().subscribe((data: Game[]) => {
      this.juegos = data['juegos'];
      console.log('data: ', data);
    });
  }


  votarJuego(juego: Game) {
    console.log('juego: ', juego);
    this.gotyService.votarJuego(juego.id).subscribe((data: any) => {
      console.log('data: ', data);
      if (data.ok) {
        Swal.fire('Gracias', data.mensaje, 'success');
      } else {
        // Swal.fire('Opss', data.mensaje, 'error');
      }
    },(error)=>{
      Swal.fire('Opss', error.error.mensaje, 'error');
    });
  }




}
