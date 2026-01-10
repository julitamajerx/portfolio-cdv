import { Component, inject, OnInit } from '@angular/core';
import { GameService } from '../../../games/game-service';
import { Game } from '../../../games/game-model';

@Component({
  selector: 'app-game-header',
  imports: [],
  templateUrl: './game-header.html',
  styleUrl: './game-header.css',
})
export class GameHeader implements OnInit {
  protected game?:Game;
  private gameService = inject(GameService);
  
   ngOnInit(): void {
    this.game = this.gameService.getGameById();
  }
}
