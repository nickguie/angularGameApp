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
  editMode = false;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.refresh();
  }

  private refresh(): void {
    this.games = this.gameService.list();
  }

  newGame():void{
    this.selectedGame = new Game('');
  }

  edit(game: Game): void{
    this.selectedGame = game;
    this.editMode = true;
  }

  save():void{
    if(this.selectedGame){

      if(this.editMode){
        this.gameService.update(this.selectedGame);
      }else{
        this.gameService.insert(this.selectedGame);
      }
      
      this.selectedGame=undefined;
      this.refresh();
    }
  }

  remove(id?:number):void{

    if(id===undefined) {
      return;
    }

    this.gameService.remove(id);
    this.refresh();
  }

}
