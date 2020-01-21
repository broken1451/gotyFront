import { Component, OnInit } from '@angular/core';
import { GotyService } from '../../services/goty.service';
import { Game } from '../../interfaces/interfaces';


@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.scss']
})
export class GotyComponent implements OnInit {

  public juegos: Game[] = [];

  constructor(private gotyService: GotyService) { }

  ngOnInit() {
    this.gotyService.getNominados().subscribe((juegos: Game[]) => {
      this.juegos = juegos;
      console.log('juegos: ', juegos);
    });
  }

}
