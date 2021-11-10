import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';
import { Game } from './../../model/game'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games = new Array<Game>();
  selectedGame?: Game;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.games = this.gameService.list();
  }

}
